import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateToolService from '@modules/tools/services/CreateToolService';
import ListToolsService from '@modules/tools/services/ListToolsService';
import RemoveToolService from '@modules/tools/services/RemoveToolService';

export default class ToolsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, url, description, tags } = request.body;

    const createTool = container.resolve(CreateToolService);

    try {
      const tool = await createTool.execute({
        title,
        url,
        description,
        tags,
      });

      return response.json(tool);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTool = container.resolve(ListToolsService);

    try {
      const tools = await listTool.execute();

      return response.json(tools);
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
