/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import { inject, injectable } from 'tsyringe';

import IToolRepository from '../repositories/IToolsRepository';

import Tool from '../infra/typeorm/entities/Tools';

interface IRequest {
  id: string;
  title: string;
  url: string;
  description: string;
}

@injectable()
class UpdateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolRepository,
  ) {}

  public async execute({
    id,
    title,
    url,
    description,
  }: IRequest): Promise<Tool> {
    try {
      const updateTool = await this.toolsRepository.findToolByID(id);

      if (!updateTool) {
        throw new Error('Tool nod found');
      }

      updateTool.title = title;
      updateTool.url = url;
      updateTool.description = description;

      const updatedTool = await this.toolsRepository.updateTool(updateTool);

      return updatedTool;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export default UpdateToolService;
