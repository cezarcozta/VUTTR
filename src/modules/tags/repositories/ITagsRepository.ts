import Tag from '../infra/typeorm/entities/Tag';
import ICreateTagDTO from '../dtos/ICreateTagDTO';

interface IFindTags {
  title: string;
}

export default interface IToolsRepository {
  createAndSave(data: ICreateTagDTO): Promise<Tag>;
  removeTag(id: string): Promise<void>;
  findAllTags(): Promise<Tag[]>;
  findAllTagsByTitle(tags: IFindTags[]): Promise<Tag[]>;
  findTagByTitle(title: string): Promise<Tag | undefined>;
}
