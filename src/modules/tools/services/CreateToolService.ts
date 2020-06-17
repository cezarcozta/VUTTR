import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tools';
import ITagsRepository from '../../tags/repositories/ITagsRepository';

interface ITag {
  title: string;
}

interface IRequest {
  title: string;
  url: string;
  description: string;
  tags: ITag[];
}

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,

    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({
    title,
    url,
    description,
    tags,
  }: IRequest): Promise<Tool> {
    try {
      const allTags = await this.tagsRepository.findAllTagsByTitle(tags);

      if (allTags.length !== tags.length) {
        throw new Error('Tag is missing');
      }

      const tagsList = allTags.map(tag => {
        return {
          tag_id: tag.id,
          tag_title: tag.title,
        };
      });

      const dataTool = {
        title,
        url,
        description,
        tags: tagsList,
      };

      const tool = await this.toolsRepository.createAndSave(dataTool);

      return tool;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default CreateToolService;
