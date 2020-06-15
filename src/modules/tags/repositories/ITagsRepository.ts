import Tag from '../infra/typeorm/entities/Tag';
import ICreateToolDTO from '../dtos/ICreateTagDTO';

export default interface IToolsRepository {
  createAndSave(data: ICreateToolDTO): Promise<Tag>;
  removeTag(id: string): Promise<void>;
  findAllTags(): Promise<Tag[]>;
  findTagByID(id: string): Promise<Tag | undefined>;
}
