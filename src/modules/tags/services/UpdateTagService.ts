/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';

import ITagRepository from '../repositories/ITagsRepository';
import Tag from '../infra/typeorm/entities/Tag';

@injectable()
class UpdateTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagRepository,
  ) {}

  public async execute({ id, title }: Tag): Promise<Tag> {
    try {
      const updateTag = await this.tagsRepository.findTagByID(id);

      if (!updateTag) {
        throw new Error('Tag not found!');
      }

      updateTag.title = title;

      const updatedTag = await this.tagsRepository.updateTag(updateTag);

      return updatedTag;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export default UpdateTagService;
