import { PostApplicationService } from './PostApplicationService';
import { IPostRepository } from '../domain/post/IPostRepository';

describe('PostApplicationService', () => {
  let getPostsMock: jest.MockInstance<
    ReturnType<IPostRepository['getPosts']>,
    Parameters<IPostRepository['getPosts']>
  >;
  let getPostByDateMock: jest.MockInstance<
    ReturnType<IPostRepository['getPostByDate']>,
    Parameters<IPostRepository['getPostByDate']>
  >;
  let applicationService: PostApplicationService;
  const date = 'sample-date';

  beforeEach(async () => {
    getPostsMock = jest.fn();
    getPostByDateMock = jest.fn();
    const MockPostRepository = jest.fn();
    MockPostRepository.mockImplementation(() => ({
      getPosts: getPostsMock,
      getPostByDate: getPostByDateMock,
    }));
    applicationService = new PostApplicationService(new MockPostRepository() as never);
  });

  describe('methods', () => {
    test('getPosts', async () => {
      await applicationService.getPosts();
      expect(getPostsMock.mock.calls[0]).not.toBeUndefined();
    });
    test('getPostByDate', async () => {
      await applicationService.getPostByDate(date);
      expect(getPostByDateMock.mock.calls[0]).not.toBeUndefined();
      expect(getPostByDateMock.mock.calls[0][0]).toBe(date);
    });
  });
});
