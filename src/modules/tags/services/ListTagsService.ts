import { injectable, inject } from 'tsyringe';

import ITagsRepository from '../repositories/ITagsRepository';
import Tag from '../infra/typeorm/entities/Tag';

@injectable()
class ListTagsService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  public async execute(): Promise<Tag[] | undefined> {
    const tag = await this.tagsRepository.findAllTags();

    return tag;
  }
}

export default ListTagsService;
