import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';

import CreateTagService from './CreateTagService';
import RemoveTagService from './RemoveTagService';

let fakeTagRepository: FakeTagsRepository;
let createTagService: CreateTagService;
let removeTag: RemoveTagService;

describe('RemoveTagService', () => {
  beforeEach(() => {
    fakeTagRepository = new FakeTagsRepository();

    createTagService = new CreateTagService(fakeTagRepository);
    removeTag = new RemoveTagService(fakeTagRepository);
  });

  it('should be able to remove a tag', async () => {
    const tag = await createTagService.execute({
      title: 'Planning',
    });

    await expect(removeTag.execute(tag.id)).resolves.toBeUndefined();
  });

  it('should NOT be able to remove a tag with non-existing id', async () => {
    // const removedTag = await ;
    await expect(removeTag.execute('wrongID')).rejects.toBeInstanceOf(Error);
    // await expect(removeTag.execute('wrongID3')).rejects.toBeInstanceOf(Error);
  });
});
