import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateToolService from '@modules/tools/services/CreateToolService';

export default class ToolsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, url, description, tags } = request.body;

    const createTool = container.resolve(CreateToolService);

    try {
      const tool = await createTool.execute({
        name,
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
    const tools = [
      {
        id: 1,
        name: 'Notion',
        url: 'https://notion.so',
        description: 'Description of notion',
        tags: ['organization, planning, colaboration'],
      },
      {
        id: 2,
        name: 'Notion',
        url: 'https://notion.so',
        description: 'Description of notion',
        tags: ['organization, planning, colaboration'],
      },
    ];
    return response.json(tools);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const tools = [
      {
        id: 1,
        name: 'Notion',
        url: 'https://notion.so',
        description: 'Description of notion',
        tags: ['organization, planning, colaboration'],
      },
      {
        id: 2,
        name: 'Notion',
        url: 'https://notion.so',
        description: 'Description of notion',
        tags: ['organization, planning, colaboration'],
      },
    ];

    const findToolIndex = tools.findIndex(tool => tool.id === Number(id));
    tools.splice(findToolIndex, 1);
    // eslint-disable-next-line no-console
    console.log(tools);
    return response.status(204).json();
  }
}
