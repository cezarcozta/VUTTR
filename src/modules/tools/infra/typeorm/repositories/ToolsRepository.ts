import { getRepository, Repository } from 'typeorm';

import IToolsRepository from '../../../repositories/IToolsRepository';
import ICreateToolDTO from '../../../dtos/ICreateToolDTO';
import IUpdateToolDTO from '../../../dtos/IUpdateToolDTO';

import Tool from '../entities/Tools';
import ToolsTags from '../entities/ToolsTags';

class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async createAndSave({
    title,
    url,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    try {
      const tool = this.ormRepository.create({
        title,
        url,
        description,
        tags,
      });

      await this.ormRepository.save(tool);

      return tool;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findAllTools(): Promise<Tool[]> {
    try {
      const tools = await this.ormRepository.find();

      return tools;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async removeTool(id: string): Promise<void> {
    try {
      const tool = await this.ormRepository.findOne(id);

      if (!tool) {
        throw new Error('Tool not found!');
      }

      await this.ormRepository.remove(tool);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findAllRelationByTool(tool: Tool): Promise<ToolsTags[]> {
    const actualRelations = await this.ormRepository
      .createQueryBuilder()
      .relation(Tool, 'tags')
      .of(tool)
      .loadMany();

    if (!actualRelations) {
      throw new Error('No Actual Relations');
    }
    return actualRelations;
  }

  public async updateTool(tool: IUpdateToolDTO): Promise<Tool> {
    try {
      const updateTool = await this.ormRepository.save(tool);
      return updateTool;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findToolByID(id: string): Promise<Tool | undefined> {
    try {
      const tool = await this.ormRepository.findOne(id);

      if (!tool) {
        throw new Error('Tool not found!');
      }

      return tool;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ToolsRepository;
