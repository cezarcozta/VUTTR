import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ToolsController from '@modules/tools/infra/http/controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.use(ensureAuthenticated);

toolsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      url: Joi.string().requeride(),
      description: Joi.string().required(),
      tags: Joi.string().required(),
    },
  }),
  toolsController.create,
);

toolsRouter.get('/', toolsController.index);

toolsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      title: Joi.string().required(),
      url: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  toolsController.update,
);

toolsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  toolsController.remove,
);

export default toolsRouter;
