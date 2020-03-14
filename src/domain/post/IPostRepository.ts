import { PostEntity, PostFields } from './PostEntity';

export interface IPostRepository {
  getPosts: () => Promise<PostEntity[]>;
  getPostByDate: (date: PostFields['date']) => Promise<PostEntity>;
}
