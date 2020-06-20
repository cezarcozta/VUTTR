/* eslint-disable camelcase */
import Tag from '../infra/typeorm/entities/Tag';
import ICreateTagDTO from '../dtos/ICreateTagDTO';

interface IFindTags {
  title: string;
  id: string;
}

export default interface ITagsRepository {
  createAndSave(data: ICreateTagDTO): Promise<Tag>;

  removeTag(id: string): Promise<void>;

  findAllTags(): Promise<Tag[]>;

  findAllTagsByTitle(tags: IFindTags[]): Promise<Tag[]>;

  findAllTagsByID(ids: IFindTags[]): Promise<Tag[]>;

  findTagByID(id: string): Promise<Tag | undefined>;

  findTagByTitle(title: string): Promise<Tag | undefined>;

  updateTag(tag: Tag): Promise<Tag>;
}
