/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tools';
import IToolsTagsRepository from '../repositories/IToolsTagsRepository';

@injectable()
class ListToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,

    @inject('ToolsTagsRepository')
    private toolsTagsRepository: IToolsTagsRepository,
  ) {}

  public async execute(tag_title: string): Promise<Tool[]> {
    try {
      const toolsByTagTitle = await this.toolsTagsRepository.findToolsIDByTags(
        tag_title,
      );

      if (!toolsByTagTitle) {
        throw new Error();
      }

      const ids = toolsByTagTitle.map(t => t.tool_id);

      const tools = await this.toolsRepository.findAllToolsByIDs(ids);

      if (!tools) {
        throw new Error();
      }

      return tools;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ListToolsService;
