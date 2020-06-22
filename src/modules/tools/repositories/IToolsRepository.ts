import Tool from '../infra/typeorm/entities/Tools';
import ToolsTags from '../infra/typeorm/entities/ToolsTags';
import ICreateToolDTO from '../dtos/ICreateToolDTO';
import IUpdateToolDTO from '../dtos/IUpdateToolDTO';

export default interface IToolsRepository {
  createAndSave(data: ICreateToolDTO): Promise<Tool>;

  removeTool(id: string): Promise<void>;

  updateTool(data: IUpdateToolDTO): Promise<Tool>;

  findAllTools(): Promise<Tool[]>;

  findAllRelationByTool(updateTool: Tool): Promise<ToolsTags[]>;

  findToolByID(id: string): Promise<Tool | undefined>;
}
