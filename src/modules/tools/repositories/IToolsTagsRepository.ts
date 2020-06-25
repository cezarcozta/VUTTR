/* eslint-disable camelcase */
import ToolsTags from '../infra/typeorm/entities/ToolsTags';

export default interface IToolsTagsRepository {
  findToolsIDByTag(title: string): Promise<ToolsTags[] | undefined>;
}
