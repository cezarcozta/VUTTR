import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tools';

@injectable()
class ListToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(): Promise<Tool[] | undefined> {
    try {
      const tools = await this.toolsRepository.findAllTools();

      return tools;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ListToolsService;
