import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';

import ListTagService from './ListTagsService';

let fakeTagsRepository: FakeTagsRepository;
let listTag: ListTagService;

describe('ListTagService', () => {
  beforeEach(() => {
    fakeTagsRepository = new FakeTagsRepository();

    listTag = new ListTagService(fakeTagsRepository);
  });

  it('should be able to list all tags', async () => {
    const tags = await listTag.execute();

    expect(tags).toBeTruthy();
  });
});
