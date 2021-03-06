import { Router } from 'express';

import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import toolsRouter from '@modules/tools/infra/http/routes/tools.routes';
import tagsRouter from '@modules/tags/infra/http/routes/tags.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/tools', toolsRouter);
routes.use('/tags', tagsRouter);

export default routes;
