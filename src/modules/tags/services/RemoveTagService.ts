import { injectable, inject } from 'tsyringe';

import ITagsRepository from '../repositories/ITagsRepository';

interface IRequest {
  id: string;
}

@injectable()
class RemoveTagservice {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    try {
      const tag = await this.tagsRepository.findTagByID(id);

      if (!tag) {
        throw new Error('Tool not found!');
      }

      await this.tagsRepository.removeTag(tag.id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default RemoveTagservice;
