/* eslint-disable camelcase */
import ToolsTags from '../infra/typeorm/entities/ToolsTags';

export default interface IToolsTagsRepository {
  findToolsIDByTags(tagTitle: string): Promise<ToolsTags[] | undefined>;
}
