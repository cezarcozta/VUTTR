/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';

import IToolsTagsRepository from '../../../repositories/IToolsTagsRepository';

import ToolsTags from '../entities/ToolsTags';

interface IFindTags {
  tag_title: string;
}

class ToolsTagsRepository implements IToolsTagsRepository {
  private ormRepository: Repository<ToolsTags>;

  constructor() {
    this.ormRepository = getRepository(ToolsTags);
  }

  public async findToolsIDByTags(
    tag_title: string,
  ): Promise<ToolsTags[] | undefined> {
    try {
      const toolByTag = this.ormRepository.find({
        where: {
          tag_title,
        },
      });

      return toolByTag;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ToolsTagsRepository;
