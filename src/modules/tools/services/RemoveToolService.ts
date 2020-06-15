import { injectable, inject } from 'tsyringe';

import IToolsRepository from '../repositories/IToolsRepository';

interface IRequest {
  id: string;
}

@injectable()
class RemoveToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    try {
      const tool = await this.toolsRepository.findToolByID(id);

      if (!tool) {
        throw new Error('Tool not found!');
      }

      await this.toolsRepository.removeTool(tool.id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default RemoveToolService;
