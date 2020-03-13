import { PostEntity, PostFields } from '../domain/post/PostEntity';
import { IPostRepository } from '../domain/post/IPostRepository';

interface IPostApplicationService {
  getPosts: () => Promise<PostEntity[]>;
  getPostBySlug: (slug: PostFields['slug']) => Promise<PostEntity>;
}

export class PostApplicationService implements IPostApplicationService {
  private postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  async getPosts(): Promise<PostEntity[]> {
    return await this.postRepository.getPosts();
  }

  async getPostBySlug(slug: PostFields['slug']): Promise<PostEntity> {
    return await this.postRepository.getPostBySlug(slug);
  }
}
