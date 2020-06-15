import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/IToolsRepository';
import Tool from '../infra/typeorm/entities/Tools';

interface IRequest {
  title: string;
  url: string;
  description: string;
  tags: [];
}

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({
    title,
    url,
    description,
    tags,
  }: IRequest): Promise<Tool> {
    try {
      const tool = await this.toolsRepository.createAndSave({
        title,
        url,
        description,
        tags,
      });

      return tool;
    } catch (error) {
      throw new Error();
    }
  }
}

export default CreateToolService;
