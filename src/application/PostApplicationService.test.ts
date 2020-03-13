import { PostApplicationService } from './PostApplicationService';
import { IPostRepository } from '../domain/post/IPostRepository';

describe('PostApplicationService', () => {
  let getPostsMock: jest.MockInstance<
    ReturnType<IPostRepository['getPosts']>,
    Parameters<IPostRepository['getPosts']>
  >;
  let getPostBySlugMock: jest.MockInstance<
    ReturnType<IPostRepository['getPostBySlug']>,
    Parameters<IPostRepository['getPostBySlug']>
  >;
  let applicationService: PostApplicationService;
  const slug = 'sample-slug';

  beforeEach(async () => {
    getPostsMock = jest.fn();
    getPostBySlugMock = jest.fn();
    const MockPostRepository = jest.fn();
    MockPostRepository.mockImplementation(() => ({
      getPosts: getPostsMock,
      getPostBySlug: getPostBySlugMock,
    }));
    applicationService = new PostApplicationService(new MockPostRepository() as never);
  });

  describe('methods', () => {
    test('getPosts', async () => {
      await applicationService.getPosts();
      expect(getPostsMock.mock.calls[0]).not.toBeUndefined();
    });
    test('getPostBySlug', async () => {
      await applicationService.getPostBySlug(slug);
      expect(getPostBySlugMock.mock.calls[0]).not.toBeUndefined();
      expect(getPostBySlugMock.mock.calls[0][0]).toBe(slug);
    });
  });
});
