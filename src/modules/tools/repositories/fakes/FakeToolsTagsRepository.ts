import IToolsTagsRepository from '../IToolsTagsRepository';

import ToolsTags from '../../infra/typeorm/entities/ToolsTags';

class ToolsTagsRepository implements IToolsTagsRepository {
  private toolsTags: ToolsTags[] = [];

  public async findToolsIDByTags(
    tagTitle: string,
  ): Promise<ToolsTags[] | undefined> {
    return this.toolsTags;
  }
}

export default ToolsTagsRepository;
