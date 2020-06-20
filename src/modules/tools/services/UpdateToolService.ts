/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';

import IToolRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tools';

import IToolsTagsRepository from '../repositories/IToolsTagsRepository';
import ITagsRepository from '../../tags/repositories/ITagsRepository';
// import ToolsTags from '../infra/typeorm/entities/ToolsTags';

interface IToolsTags {
  tool_id: string;
  tag_id: string;
}

interface IRequest {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: IToolsTags[];
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
      const updateTool = await this.toolsRepository.findToolByID(id);

      if (!updateTool) {
        throw new Error('Tool nod found');
      }

      if (tags) {
        // se tem tag para mudar fazer trocar essa porra que eu nao consigo
      }

      updateTool.title = title;
      updateTool.url = url;
      updateTool.description = description;

      const updatedTool = await this.toolsRepository.updateTool(updateTool);

      return updatedTool;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export default UpdateToolService;
