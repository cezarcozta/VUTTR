import { Router } from 'express';

import toolsRouter from '@modules/tools/infra/http/routes/tools.routes';
import tagsRouter from '@modules/tags/infra/http/routes/tags.routes';

const routes = Router();

routes.use('/tools', toolsRouter);
routes.use('/tags', tagsRouter);

export default routes;
