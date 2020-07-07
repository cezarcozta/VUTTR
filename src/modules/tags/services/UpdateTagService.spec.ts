import FakeTagsRepository from '../repositories/fakes/FakeTagsRepository';

import CreateTagService from './CreateTagService';
import UpdateTagService from './UpdateTagService';

let fakeTagRepository: FakeTagsRepository;
let createTagService: CreateTagService;
let updateTag: UpdateTagService;

describe('RemoveTagServce', () => {
  beforeEach(() => {
    fakeTagRepository = new FakeTagsRepository();

    createTagService = new CreateTagService(fakeTagRepository);
    updateTag = new UpdateTagService(fakeTagRepository);
  });

  it('should be able to update a tag', async () => {
    const tag = await createTagService.execute({
      title: 'Plannin',
    });

    tag.title = 'Planejamento';

    const updatedTag = await updateTag.execute(tag);

    expect(updatedTag.title).toEqual('Planejamento');
  });

  // it('should NOT be able to update a tag with wrong id', async () => {
  //   const tag = await createTagService.execute({
  //     title: 'Plannin',
  //   });
  //   await expect(updateTag.execute(tag)).rejects.toBeInstanceOf(Error);
  // });
});
