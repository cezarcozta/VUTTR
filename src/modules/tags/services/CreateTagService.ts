import { injectable, inject } from 'tsyringe';

import ITagsRepository from '../repositories/ITagsRepository';
import Tag from '../infra/typeorm/entities/Tag';

interface IRequest {
  title: string;
}

@injectable()
class CreateTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute({ title }: IRequest): Promise<Tag> {
    try {
      const tag = await this.tagsRepository.createAndSave({
        title,
      });

      return tag;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default CreateTagService;
