import { PostEntity, PostFields } from './PostEntity';

export interface IPostRepository {
  getPosts: () => Promise<PostEntity[]>;
  getPostBySlug: (slug: PostFields['slug']) => Promise<PostEntity>;
}
