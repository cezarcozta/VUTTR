import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import TagsController from '../controllers/TagsController';

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.use(ensureAuthenticated);

tagsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
    },
  }),
  tagsController.create,
);

tagsRouter.get('/', tagsController.index);

tagsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      title: Joi.string().required(),
    },
  }),
  tagsController.update,
);

tagsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  tagsController.remove,
);

export default tagsRouter;
