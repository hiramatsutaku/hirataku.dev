import path from 'path';
import Post, { PostFields } from '../../domain/post/PostEntity';
import { IPostRepository } from '../../domain/post/IPostRepository';

export class PostRepository implements IPostRepository {
  async getPosts(): Promise<Post[]> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs-extra');
    const fileNames: string[] = await fs.readdir(
      path.resolve(process.env.ROOT as string, './src/posts/'),
    );
    const metas = await Promise.all(
      fileNames.map(async fileName => {
        const { meta } = await import(`../../posts/${fileName}`);
        return meta;
      }),
    );
    return metas.map(meta => new Post(meta));
  }

  async getPostBySlug(slug: PostFields['slug']): Promise<Post> {
    const { meta } = await import(`../../posts/${slug}`);
    return new Post(meta);
  }
}
