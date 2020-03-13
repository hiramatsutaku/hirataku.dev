import { PostRepository } from './PostRepository';
import path from 'path';

describe.skip('PostRepository', () => {
  test('getPosts', async () => {
    const repo = new PostRepository(path.resolve(__dirname, '../../posts/'));
    const posts = await repo.getPosts();
    expect(posts).toContainEqual({ slug: 'mdx-sample' });
  });
  test.skip('getPostBySlug');
});
