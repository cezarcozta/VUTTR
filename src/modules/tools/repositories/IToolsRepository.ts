import Tool from '../infra/typeorm/entities/Tools';
import ICreateToolDTO from '../dtos/ICreateToolDTO';

export default interface IToolsRepository {
  createAndSave(data: ICreateToolDTO): Promise<Tool>;
  removeTool(id: string): Promise<void>;
  findAllTools(): Promise<Tool[]>;
  findToolByID(id: string): Promise<Tool | undefined>;
}
