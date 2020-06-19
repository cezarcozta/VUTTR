import Tool from '../infra/typeorm/entities/Tools';
import ICreateToolDTO from '../dtos/ICreateToolDTO';
import IUpdateToolDTO from '../dtos/IUpdateToolDTO';

export default interface IToolsRepository {
  createAndSave(data: ICreateToolDTO): Promise<Tool>;
  removeTool(id: string): Promise<void>;
  updateTool(data: IUpdateToolDTO): Promise<Tool>;
  findAllTools(): Promise<Tool[]>;
  findToolByID(id: string): Promise<Tool | undefined>;
}
