import { container } from 'tsyringe';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ToolsRepository from '@modules/tools/infra/typeorm/repositories/ToolsRepository';

import ITagsRepository from '@modules/tags/repositories/ITagsRepository';
import TagsRepository from '@modules/tags/infra/typeorm/repositories/TagsRepository';

import IToolsTagsRepository from '@modules/tools/repositories/IToolsTagsRepository';
import ToolsTagsRepository from '@modules/tools/infra/typeorm/repositories/ToolsTagsRepository';

container.registerSingleton<IToolsRepository>(
  'ToolsRepository',
  ToolsRepository,
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<IToolsTagsRepository>(
  'ToolsTagsRepository',
  ToolsTagsRepository,
);
