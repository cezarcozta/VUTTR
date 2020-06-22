/* eslint-disable camelcase */
import { getRepository, Repository } from 'typeorm';

import IToolsTagsRepository from '../../../repositories/IToolsTagsRepository';

import ToolsTags from '../entities/ToolsTags';

class ToolsTagsRepository implements IToolsTagsRepository {
  private ormRepository: Repository<ToolsTags>;

  constructor() {
    this.ormRepository = getRepository(ToolsTags);
  }

  public async updateRelations(
    oldSet: ToolsTags[],
    newSet: ToolsTags[],
  ): Promise<void> {
    try {
      console.log('newSet: ', newSet);
      const newRelation = this.ormRepository.create(newSet);
      await this.ormRepository.save(newRelation);
      await this.ormRepository.remove(oldSet);

      // console.log(
      //   'query add',
      //   await this.ormRepository
      //     .createQueryBuilder()
      //     .relation(ToolsTags, 'tag')
      //     .of(ToolsTags)
      //     .loadMany(),
      // );
      // await this.ormRepository
      //   .createQueryBuilder()
      //   .relation(ToolsTags, 'tool')
      //   .of(ToolsTags)
      //   .set(null);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ToolsTagsRepository;
