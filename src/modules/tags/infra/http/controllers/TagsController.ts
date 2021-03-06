import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTagService from '@modules/tags/services/CreateTagService';
import ListTagsService from '@modules/tags/services/ListTagsService';
import RemoveTagService from '@modules/tags/services/RemoveTagService';
import UpdateTagService from '@modules/tags/services/UpdateTagService';
import { classToClass } from 'class-transformer';

export default class TagsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const createTag = container.resolve(CreateTagService);

    try {
      const tag = await createTag.execute({
        title,
      });

      return response.json(tag);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTags = container.resolve(ListTagsService);

    try {
      const tags = await listTags.execute();

      return response.json(tags);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { title, ...rest } = request.body;

      const tag = {
        id,
        title,
        ...rest,
      };

      const updateTag = container.resolve(UpdateTagService);

      await updateTag.execute(tag);

      return response.status(204).json(classToClass(tag));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const removeTag = container.resolve(RemoveTagService);

      await removeTag.execute({ id });

      return response.status(204).json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
