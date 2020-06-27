import { container } from 'tsyringe';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ToolsRepository from '@modules/tools/infra/typeorm/repositories/ToolsRepository';

import ITagsRepository from '@modules/tags/repositories/ITagsRepository';
import TagsRepository from '@modules/tags/infra/typeorm/repositories/TagsRepository';

import IToolsTagsRepository from '@modules/tools/repositories/IToolsTagsRepository';
import ToolsTagsRepository from '@modules/tools/infra/typeorm/repositories/ToolsTagsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IToolsRepository>(
  'ToolsRepository',
  ToolsRepository,
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<IToolsTagsRepository>(
  'ToolsTagsRepository',
  ToolsTagsRepository,
);
