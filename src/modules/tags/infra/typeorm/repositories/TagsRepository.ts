import { getRepository, Repository } from 'typeorm';

import ITagsRepository from '@modules/tags/repositories/ITagsRepository';
import ICreateTagDTO from '@modules/tags/dtos/ICreateTagDTO';

import Tag from '@modules/tags/infra/typeorm/entities/Tag';

class TagsRepository implements ITagsRepository {
  private ormRepository: Repository<Tag>;

  constructor() {
    this.ormRepository = getRepository(Tag);
  }

  public async createAndSave(tagData: ICreateTagDTO): Promise<Tag> {
    const tool = this.ormRepository.create(tagData);

    try {
      await this.ormRepository.save(tool);

      return tool;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findAllTags(): Promise<Tag[]> {
    try {
      const tools = await this.ormRepository.find();

      return tools;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async removeTag(id: string): Promise<void> {
    try {
      const tool = await this.ormRepository.findOne(id);

      if (!tool) {
        throw new Error('Tool not found!');
      }

      await this.ormRepository.remove(tool);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findTagByID(id: string): Promise<Tag | undefined> {
    try {
      const tool = await this.ormRepository.findOne(id);

      if (!tool) {
        throw new Error('Tool not found!');
      }

      return tool;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default TagsRepository;
