/* eslint-disable camelcase */
import ToolsTags from '../infra/typeorm/entities/ToolsTags';

export default interface IToolsTagsRepository {
  updateRelations(toolsTags: ToolsTags[], newSet: ToolsTags[]): Promise<void>;
}
