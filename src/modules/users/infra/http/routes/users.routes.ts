import { Router } from 'express';
import UsersController from '../controllers/UsersControllers';

const usersRouter = Router();
const usersControlller = new UsersController();

usersRouter.post('/', usersControlller.create);

export default usersRouter;
