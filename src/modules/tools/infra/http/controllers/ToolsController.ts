import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateToolService from '@modules/tools/services/CreateToolService';
import ListToolsService from '@modules/tools/services/ListToolsService';
import UpdateToolService from '@modules/tools/services/UpdateToolService';
import RemoveToolService from '@modules/tools/services/RemoveToolService';

export default class ToolsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { title, url, description, tags } = request.body;

      const createTool = container.resolve(CreateToolService);

      const tool = await createTool.execute({
        title,
        url,
        description,
        tags,
      });

      return response.status(201).json(classToClass(tool));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const listTool = container.resolve(ListToolsService);

      const tools = await listTool.execute();

      return response.json(classToClass(tools));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const { title, url, description, tags, ...rest } = request.body;

      const tool = {
        id,
        title,
        url,
        description,
        ...rest,
        tags,
      };
      console.log('Controller enviando: ', tool);
      const updateTool = container.resolve(UpdateToolService);

      await updateTool.execute(tool);

      return response.status(204).json(classToClass(tool));
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      const removeTool = container.resolve(RemoveToolService);

      await removeTool.execute({ id });

      return response.status(204).json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
