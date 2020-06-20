import { getRepository, Repository } from 'typeorm';

import IToolsRepository from '../../../repositories/IToolsRepository';
import ICreateToolDTO from '../../../dtos/ICreateToolDTO';
import IUpdateToolDTO from '../../../dtos/IUpdateToolDTO';

import Tool from '../entities/Tools';

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

  public async updateTool(tool: IUpdateToolDTO): Promise<Tool> {
    try {
      return this.ormRepository.save(tool);

      // console.log('futureR', toolsTags);
      // const actualRelations = await this.ormRepository
      //   .createQueryBuilder()
      //   .relation(Tool, 'tags')
      //   .of(tool)
      //   .loadMany();

      // if (!actualRelations) {
      //   throw new Error('No Actual Relations');
      // }

      // console.log('actualR', actualRelations);

      // const add = await this.ormRepository
      //   .createQueryBuilder()
      //   .relation(Tool, 'tags')
      //   .of(tool)
      //   .add(tool.tags);

      // console.log('add', add);

      // await this.ormRepository
      //   .createQueryBuilder()
      //   .relation(Tool, 'tags')
      //   .of(Tool)
      //   .remove(actualRelations);

      // await this.ormRepository
      //   .createQueryBuilder()
      //   .update()
      //   .set({
      //     title,
      //     url,
      //     description,
      //     tags,
      //   })
      //   .where('id = :id', { id })
      //   .execute();
      // await this.ormRepository.save(tool);

      // const updatedTool = await this.ormRepository.findOne(tool);

      // if (!updatedTool) {
      //   throw new Error('Deu ruim');
      // }

      // return updatedTool;
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
