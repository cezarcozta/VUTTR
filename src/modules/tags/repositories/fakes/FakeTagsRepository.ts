import { uuid } from 'uuidv4';

import ICreateTagDTO from '@modules/tags/dtos/CreateTagDTO';
import ITagsRepository from '../ITagsRepository';

import Tag from '../../infra/typeorm/entities/Tag';

interface IFindTags {
  title: string;
  id: string;
}

class TagsRepository implements ITagsRepository {
  private tags: Tag[] = [];

  public async createAndSave(title: ICreateTagDTO): Promise<Tag> {
    try {
      const tag = new Tag();

      Object.assign(tag, { id: uuid() }, title);

      this.tags.push(tag);

      return tag;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async removeTag(id: string): Promise<void> {
    const tagIndex = this.tags.findIndex(tag => tag.id === id);

    this.tags.splice(tagIndex, 1);
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
    const findTag = this.tags.find(tag => tag.title === title);

    return findTag;
  }

  public async updateTag({ id, title }: Tag): Promise<Tag> {
    const updateTag = this.tags.find(tag => tag.id === id);

    if (!updateTag) {
      throw new Error('Tag not found');
    }

    updateTag.title = title;

    this.tags.push(updateTag);

    return updateTag;
  }
}

export default TagsRepository;
