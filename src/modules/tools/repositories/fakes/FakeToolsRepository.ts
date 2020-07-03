import { uuid } from 'uuidv4';

import IToolsRepository from '../IToolsRepository';
import ICreateToolDTO from '../../dtos/ICreateToolDTO';
import IUpdateToolDTO from '../../dtos/IUpdateToolDTO';

import Tool from '../../infra/typeorm/entities/Tools';

interface IFindTool {
  id: string;
  title: string;
}

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

  public async removeTool(id: string): Promise<void> {
    this.tools.splice(Number(id), 1);
  }

  public async updateTool({
    id,
    title,
    url,
    description,
  }: IUpdateToolDTO): Promise<Tool> {
    const updateTool = this.tools.find(t => t.id === id);

    if (!updateTool) {
      throw new Error('Tool not found');
    }

    updateTool.title = title;
    updateTool.url = url;
    updateTool.description = description;

    const toolIndex = this.tools.findIndex(t => t.id === id);

    this.tools.push(updateTool);

    return updateTool;
  }

  public async findToolByID(id: string): Promise<Tool | undefined> {
    const tool = this.tools.find(t => t.id === id);

    return tool;
  }

  public async findAllToolsByIDs(ids: IFindTool[]): Promise<Tool[]> {
    return this.tools.filter(() => {
      return {
        id: ids.map(t => t.id),
      };
    });
  }

  public async findAll(): Promise<Tool[]> {
    return this.tools;
  }
}

export default ToolsRepository;
