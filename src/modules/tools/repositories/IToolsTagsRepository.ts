/* eslint-disable camelcase */
// import ToolsTags from '../infra/typeorm/entities/ToolsTags';

export default interface IToolsTagsRepository {
  findByToolID(tool_id: string): Promise<unknown | undefined>;
}
