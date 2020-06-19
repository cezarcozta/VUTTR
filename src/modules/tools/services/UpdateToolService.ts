/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';

import IToolRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tools';

import ITagsRepository from '../../tags/repositories/ITagsRepository';
import IToolsTagsRepository from '../repositories/IToolsTagsRepository';

interface ITag {
  title: string;
}

interface IRequest {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: ITag[];
}

@injectable()
class UpdateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolRepository,

    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,

    @inject('ToolsTagsRepository')
    private toolsTagsRepository: IToolsTagsRepository,
  ) {}

  public async execute({
    id,
    title,
    url,
    description,
    tags,
  }: IRequest): Promise<Tool> {
    try {
      //----------------------------------------------------
      // ACHAR CORRESPONDENCIA NA TABELA TOOLSTAGS
      // DELETAR A CORRESPONDENCIA
      // CRIAR UMA NOVA
      // tool.tags = tagsList;
      // ----------------------------------------------------S

      const tool = await this.toolsRepository.findToolByID(id);
      const relation = await this.toolsTagsRepository.findByToolID(id);

      if (!tool) {
        throw new Error('Tool not found!');
      }

      if (!relation) {
        throw new Error('No Relation');
      }

      const allTags = await this.tagsRepository.findAllTagsByTitle(tags);

      // console.log(allTags);

      const tagsList = allTags.map(tag => {
        return {
          tag_id: tag.id,
          tag_title: tag.title,
          tool_tags: tag.tools_tags,
        };
      });

      tool.title = title;
      tool.url = url;
      tool.description = description;

      const updatedTool = await this.toolsRepository.updateTool(tool);

      return updatedTool;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export default UpdateToolService;
