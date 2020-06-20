/* eslint-disable camelcase */
import ToolsTags from '../infra/typeorm/entities/ToolsTags';
import IUpdateToolTag from '../dtos/IUpdateToolTagDTO';

interface IFindRelated {
  tool_id: string;
  tag_id: string;
}

export default interface IToolsTagsRepository {
  updateRelation(
    tags: IUpdateToolTag[],
    newTags: IUpdateToolTag[],
  ): Promise<ToolsTags[]>;
  // findAllbyID(toolsTags: IUpdateToolTag[]): Promise<ToolsTags[]>;
  findAllRelated(toolIDtagID: IFindRelated[]): Promise<ToolsTags[]>;
}
