import { client } from './contentful';
import Post, { PostFields } from '../entities/PostEntity';

const POST_CONTENT_TYPE = 'post';

export const getPosts = async (): Promise<Post[]> => {
  const entries = await client.getEntries<PostFields>({
    content_type: POST_CONTENT_TYPE,
  });
  return entries.items.map(item => new Post(item.fields));
};

export const getPostBySlug = async (slug: PostFields['slug']): Promise<Post> => {
  const entries = await client.getEntries<PostFields>({
    content_type: POST_CONTENT_TYPE,
    limit: 1,
    'fields.slug': slug,
  });
  return new Post(entries.items[0].fields);
};
