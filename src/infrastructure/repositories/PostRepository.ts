import path from 'path';
import { PostEntity, PostFields } from '../../domain/post/PostEntity';
import { IPostRepository } from '../../domain/post/IPostRepository';

export class PostRepository implements IPostRepository {
  private readonly postsPath: string;

  constructor(postsPath?: string) {
    if (postsPath) {
      this.postsPath = postsPath;
    } else {
      this.postsPath = path.resolve(process.env.ROOT as string, './src/posts/');
    }
  }

  async getPosts(): Promise<PostEntity[]> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs-extra');
    const fileNames: string[] = await fs.readdir(this.postsPath);
    const metas = await Promise.all(
      fileNames.map(async (fileName) => {
        const { meta } = await import(`../../posts/${fileName}`);
        return meta;
      }),
    );
    return metas.map((meta) => new PostEntity(meta));
  }

  async getPostByDate(date: PostFields['date']): Promise<PostEntity> {
    const { meta } = await import(`../../posts/${date}`);
    return new PostEntity(meta);
  }
}
