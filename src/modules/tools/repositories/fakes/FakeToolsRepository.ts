import { uuid } from 'uuidv4';

import IToolsRepository from '../IToolsRepository';
import ICreateToolDTO from '../../dtos/ICreateToolDTO';

import Tool from '../../infra/typeorm/entities/Tools';

class ToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];

  public async createAndSave({
    title,
    url,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { id: uuid(), title, url, description, tags });

    this.tools.push(tool);

    return tool;
  }
}

export default ToolsRepository;
