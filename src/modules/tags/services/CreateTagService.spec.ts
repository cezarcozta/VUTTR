import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';

import CreateTagService from './CreateTagService';

let fakeTagsRepository: FakeTagsRepository;
let createTag: CreateTagService;

describe('Create Tag', () => {
  beforeEach(() => {
    fakeTagsRepository = new FakeTagsRepository();

    createTag = new CreateTagService(fakeTagsRepository);
  });

  it('should be able to create a tag', async () => {
    const tag = await createTag.execute({
      title: 'Planning',
    });

    expect(tag).toHaveProperty('id');
  });

  it('should not be able to create a tag with the same title as other', async () => {
    await createTag.execute({
      title: 'design',
    });

    await expect(
      createTag.execute({
        title: 'design',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
