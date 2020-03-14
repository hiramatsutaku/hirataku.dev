import { PostEntity, PostFields } from '../domain/post/PostEntity';
import { IPostRepository } from '../domain/post/IPostRepository';

interface IPostApplicationService {
  getPosts: () => Promise<PostEntity[]>;
  getPostByDate: (date: PostFields['date']) => Promise<PostEntity>;
}

export class PostApplicationService implements IPostApplicationService {
  private postRepository: IPostRepository;

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository;
  }

  async getPosts(): Promise<PostEntity[]> {
    return await this.postRepository.getPosts();
  }

  async getPostByDate(date: PostFields['date']): Promise<PostEntity> {
    return await this.postRepository.getPostByDate(date);
  }
}
