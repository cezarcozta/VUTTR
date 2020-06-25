/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';

import IToolsTagsRepository from '../../../repositories/IToolsTagsRepository';

import ToolsTags from '../entities/ToolsTags';

class ToolsTagsRepository implements IToolsTagsRepository {
  private ormRepository: Repository<ToolsTags>;

  constructor() {
    this.ormRepository = getRepository(ToolsTags);
  }

  public async findToolsIDByTag(
    tag_title: string,
  ): Promise<ToolsTags[] | undefined> {
    try {
      const toolByTag = this.ormRepository.find({
        where: {
          tag_title,
        },
      });

      if (!toolByTag) {
        return this.ormRepository.find();
      }

      return toolByTag;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ToolsTagsRepository;
