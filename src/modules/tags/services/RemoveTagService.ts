import { injectable, inject } from 'tsyringe';

import ITagsRepository from '../repositories/ITagsRepository';

@injectable()
class RemoveTagservice {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    try {
      const tag = await this.tagsRepository.findTagByID(id);

      if (!tag) {
        throw new Error('Tag not found!');
      }

      await this.tagsRepository.removeTag(tag.id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default RemoveTagservice;
