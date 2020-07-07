import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import FakeTagsRepository from '../../tags/repositories/fakes/FakeTagsRepository';
import FakeToolsTagsRepoitory from '../repositories/fakes/FakeToolsTagsRepository';

import CreateTagService from '../../tags/services/CreateTagService';
import CreateToolService from './CreateToolService';

let fakeTagsRepository: FakeTagsRepository;
let fakeToolsRepository: FakeToolsRepository;
let fakeToolsTagsRepository: FakeToolsTagsRepoitory;
let createTool: CreateToolService;
let createTag: CreateTagService;

describe('Create Tag', () => {
  beforeEach(() => {
    fakeTagsRepository = new FakeTagsRepository();
    fakeToolsRepository = new FakeToolsRepository();

    createTool = new CreateToolService(fakeToolsRepository, fakeTagsRepository);
  });

  it('should be able to create a tool', async () => {
    const tag1 = createTag.execute({
      title: 'coding',
    });
  });
});
