/* eslint-disable camelcase */
import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tools';

@injectable()
class ListAllToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(): Promise<Tool[]> {
    try {
      const tools = this.toolsRepository.findAll();

      return tools;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ListAllToolsService;
