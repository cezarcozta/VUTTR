import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '../controllers/UsersControllers';

const usersRouter = Router();
const usersControlller = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().requerid(),
      password: Joi.string().required(),
    },
  }),
  usersControlller.create,
);

export default usersRouter;
