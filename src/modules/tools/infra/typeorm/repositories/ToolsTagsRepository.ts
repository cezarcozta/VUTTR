/* eslint-disable camelcase */
import { getRepository, Repository, In } from 'typeorm';

import IToolsTagsRepository from '../../../repositories/IToolsTagsRepository';

import ToolsTags from '../entities/ToolsTags';

import IUpdateToolTag from '../../../dtos/IUpdateToolTagDTO';

interface IFindRelated {
  tool_id: string;
  tag_id: string;
}

class ToolsTagsRepository implements IToolsTagsRepository {
  private ormRepository: Repository<ToolsTags>;

  constructor() {
    this.ormRepository = getRepository(ToolsTags);
  }

  // public async findAllbyID(tags: IUpdateToolTag[]): Promise<ToolsTags[]> {
  //   console.log('tags q chega no toolstagrepository', tags);
  //   const toolsTagsID = tags.map(tag => {
  //     return {
  //       tag_id: tag.tag_id,
  //       tool_id: tag.tool_id,
  //     };
  //   });
  //   console.log('toolsTagsIDRepository', toolsTagsID);
  //   const toolTagsIDList = await this.ormRepository.find();
  //   // console.log('toolsTagsList', toolTagsIDList);
  //   return toolTagsIDList;
  // }

  public async findAllRelated(tags: IFindRelated[]): Promise<ToolsTags[]> {
    try {
      // tags.map(tag => tag.tag_id);
      // tags.map(tag => tag.tool_id);
      console.log('tagsTTRepository', tags);
      const toolsTags = await this.ormRepository.find({
        tag_id: In(tags.map(tag => tag.tag_id)),
        tool_id: In(tags.map(tag => tag.tool_id)),
      });

      console.log('relation', toolsTags);
      return toolsTags;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async updateRelation(
    oldToolTags: IUpdateToolTag[],
    newToolTags: IUpdateToolTag[],
  ): Promise<ToolsTags[]> {
    try {
      console.log('newtags ', newToolTags);
      const newToolIDTagID = newToolTags.map(newTag => {
        return {
          id: newTag.id,
          tool_id: newTag.tool_id,
          tag_id: newTag.tag_id,
        };
      });

      console.log('tooltagID', newToolIDTagID);

      const oldToolIDTagID = oldToolTags.map(oldTag => {
        return {
          id: oldTag.id,
          tool_id: oldTag.tool_id,
          tag_id: oldTag.tag_id,
        };
      });

      console.log('oldTooltagID', oldToolIDTagID);

      const newToolsTags = await this.ormRepository.save(
        this.ormRepository.create(newToolIDTagID),
      );
      await this.ormRepository.remove(await this.findAllRelated(oldToolTags));
      return newToolsTags;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ToolsTagsRepository;
