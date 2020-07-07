import { getRepository, Repository, In } from 'typeorm';

import ITagsRepository from '@modules/tags/repositories/ITagsRepository';

import Tag from '@modules/tags/infra/typeorm/entities/Tag';
import ICreateTagDTO from '@modules/tags/dtos/CreateTagDTO';

interface IFindTags {
  title: string;
  id: string;
}

class TagsRepository implements ITagsRepository {
  private ormRepository: Repository<Tag>;

  constructor() {
    this.ormRepository = getRepository(Tag);
  }

  public async createAndSave({ title }: ICreateTagDTO): Promise<Tag> {
    try {
      const tag = this.ormRepository.create({ title });

      await this.ormRepository.save(tag);

      return tag;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findAllTags(): Promise<Tag[]> {
    try {
      const tags = await this.ormRepository.find();

      return tags;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async removeTag(id: string): Promise<void> {
    try {
      const tags = await this.ormRepository.findOne(id);

      if (!tags) {
        throw new Error('Tool not found!');
      }

      await this.ormRepository.remove(tags);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findTagByTitle(title: string): Promise<Tag | undefined> {
    try {
      const tag = await this.ormRepository.findOne({ where: { title } });

      return tag;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findAllTagsByID(tags: IFindTags[]): Promise<Tag[]> {
    const tagsID = tags.map(tag => tag.id);

    const tagsList = await this.ormRepository.find({ id: In(tagsID) });

    return tagsList;
  }

  public async findTagByID(id: string): Promise<Tag | undefined> {
    try {
      const tag = await this.ormRepository.findOne({ where: { id } });

      return tag;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async updateTag(tag: Tag): Promise<Tag> {
    try {
      return this.ormRepository.save(tag);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findAllTagsByTitle(tags: IFindTags[]): Promise<Tag[]> {
    const tagsList = await this.ormRepository.find({ title: In(tags) });

    return tagsList;
  }
}

export default TagsRepository;
