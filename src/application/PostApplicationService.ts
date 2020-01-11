import Post, { PostFields } from '../domain/post/PostEntity';
import { IPostRepository } from '../domain/post/IPostRepository';
import { PostRepository } from '../infrastructure/repositories/PostRepository';

interface IPostApplicationService {
  getPosts: () => Promise<Post[]>;
  getPostBySlug: (slug: PostFields['slug']) => Promise<Post>;
}

export class PostApplicationService implements IPostApplicationService {
  private postRepository: IPostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  async getPosts(): Promise<Post[]> {
    return await this.postRepository.getPosts();
  }

  async getPostBySlug(slug: PostFields['slug']): Promise<Post> {
    return await this.postRepository.getPostBySlug(slug);
  }
}
