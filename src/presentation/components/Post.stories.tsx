import preloadAll from 'jest-next-dynamic';
import React from 'react';
import { Post } from './Post';
import { PostEntity } from '../../domain/post/PostEntity';

beforeAll(async () => {
  await preloadAll();
});

const post = new PostEntity({ slug: 'hogehoge', title: 'タイトル' });

export const defaultStory: React.FC<{}> = () => <Post post={post}></Post>;

export default { title: 'Post' };
