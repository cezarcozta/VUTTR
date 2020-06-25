import { Router } from 'express';

import ToolsController from '@modules/tools/infra/http/controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.post('/', toolsController.create);

toolsRouter.get('/', toolsController.index);

toolsRouter.put('/:id', toolsController.update);

toolsRouter.patch('/:id');

toolsRouter.delete('/:id', toolsController.remove);

export default toolsRouter;
