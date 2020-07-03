import { uuid } from 'uuidv4';

import ITagsRepository from '../ITagsRepository';
import ICreateTagDTO from '../../dtos/ICreateTagDTO';

import Tag from '../../infra/typeorm/entities/Tag';

interface IFindTags {
  title: string;
  id: string;
}

class TagsRepository implements ITagsRepository {
  private tags: Tag[] = [];

  public async createAndSave({ title }: ICreateTagDTO): Promise<Tag> {
    const tag = new Tag();

    Object.assign(tag, { id: uuid(), title });

    this.tags.push(tag);

    return tag;
  }

  public async removeTag(id: string): Promise<void> {
    this.tags.splice(Number(id), 1);
  }

  public async findAllTags(): Promise<Tag[]> {
    return this.tags;
  }

  public async findAllTagsByTitle(tags: IFindTags[]): Promise<Tag[]> {
    return this.tags.filter(() => {
      return {
        id: tags.map(t => t.title),
      };
    });
  }

  public async findAllTagsByID(ids: IFindTags[]): Promise<Tag[]> {
    return this.tags.filter(() => {
      return {
        id: ids.map(t => t.id),
      };
    });
  }

  public async findTagByID(id: string): Promise<Tag | undefined> {
    const tag = this.tags.find(t => t.id === id);

    if (!tag) {
      throw new Error('Tag not found');
    }

    return tag;
  }

  public async findTagByTitle(title: string): Promise<Tag | undefined> {
    const tag = this.tags.find(t => t.title === title);

    if (!tag) {
      throw new Error('Tag not found');
    }

    return tag;
  }

  public async updateTag({ title }: Tag): Promise<Tag> {
    const updateTag = this.tags.find(t => t.title === title);

    if (!updateTag) {
      throw new Error('Tag not found');
    }

    updateTag.title = title;

    this.tags.push(updateTag);

    return updateTag;
  }
}

export default TagsRepository;
