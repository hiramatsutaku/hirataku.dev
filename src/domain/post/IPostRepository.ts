import Post, { PostFields } from './PostEntity';

export interface IPostRepository {
  getPosts: () => Promise<Post[]>;
  getPostBySlug: (slug: PostFields['slug']) => Promise<Post>;
}
