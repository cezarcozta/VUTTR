/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';

import IToolsTagsRepository from '../../../repositories/IToolsTagsRepository';

import ToolTags from '../entities/ToolsTags';

class ToolsTagsRepository implements IToolsTagsRepository {
  private ormRepository: Repository<ToolTags>;

  constructor() {
    this.ormRepository = getRepository(ToolTags);
  }

  public async findByToolID(tool_id: string): Promise<unknown | undefined> {
    try {
      const toolTags = await this.ormRepository.find({
        where: [
          {
            tool_id,
          },
        ],
      });

      return toolTags;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ToolsTagsRepository;
