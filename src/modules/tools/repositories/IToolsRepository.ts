import Tool from '../infra/typeorm/entities/Tools';
import ICreateToolDTO from '../dtos/ICreateToolDTO';

export default interface IToolsRepository {
  createAndSave(data: ICreateToolDTO): Promise<Tool>;
}
