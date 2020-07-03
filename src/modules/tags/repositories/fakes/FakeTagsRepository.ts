import { uuid } from 'uuidv4';

import ITagsRepository from '../ITagsRepository';
import ICreateTagDTO from '../../dtos/ICreateTagDTO';

import Tag from '../../infra/typeorm/entities/Tag';

class TagsRepository implements ITagsRepository {
  private tags: Tag[] = [];

  public async createAndSave({ title }: ICreateTagDTO): Promise<Tag> {
    const tag = new Tag();

    Object.assign(tag, { id: uuid(), title });

    this.tags.push(tag);

    return tag;
  }
}

export default TagsRepository;
