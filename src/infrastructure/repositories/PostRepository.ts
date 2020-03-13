import Post, { PostFields } from '../../domain/post/PostEntity';
import { IPostRepository } from '../../domain/post/IPostRepository';

export class PostRepository implements IPostRepository {
  async getPosts(): Promise<Post[]> {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs-extra');
    // TODO: path
    const files: string[] = await fs.readdir('./src/posts/');
    const metas = await Promise.all(
      files.map(async file => {
        // TODO: path
        const { meta } = await import(`../../posts/${file}`);
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
