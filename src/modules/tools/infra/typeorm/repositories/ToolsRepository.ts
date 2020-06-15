import { getRepository, Repository } from 'typeorm';

import IToolsRepository from '../../../repositories/IToolsRepository';
import ICreateToolDTO from '../../../dtos/ICreateToolDTO';

import Tool from '../entities/Tools';

class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async createAndSave(toolData: ICreateToolDTO): Promise<Tool> {
    const tool = this.ormRepository.create(toolData);

    try {
      await this.ormRepository.save(tool);

      return tool;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ToolsRepository;
