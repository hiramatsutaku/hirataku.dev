/* eslint-disable @typescript-eslint/camelcase */
import { client } from './contentful';
import Post, { PostFields } from '../../domain/post/PostEntity';
import { IPostRepository } from '../../domain/post/IPostRepository';

const POST_CONTENT_TYPE = 'post';

export class PostRepository implements IPostRepository {
  async getPosts(): Promise<Post[]> {
    const entries = await client.getEntries<PostFields>({
      content_type: POST_CONTENT_TYPE,
    });
    return entries.items.map(item => new Post(item.fields));
  }

  async getPostBySlug(slug: PostFields['slug']): Promise<Post> {
    const entries = await client.getEntries<PostFields>({
      content_type: POST_CONTENT_TYPE,
      limit: 1,
      'fields.slug': slug,
    });
    return new Post(entries.items[0].fields);
  }
}
