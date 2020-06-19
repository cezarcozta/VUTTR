import { Router } from 'express';

import TagsController from '../controllers/TagsController';

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.post('/', tagsController.create);

tagsRouter.get('/', tagsController.index);

tagsRouter.put('/:id', tagsController.update);

tagsRouter.delete('/:id', tagsController.remove);

export default tagsRouter;
