import React from 'react';
import { Post } from './Post';
import { PostEntity } from '../../domain/post/PostEntity';

const post = new PostEntity({ date: '20200315', title: 'タイトル' });

export const defaultStory: React.FC<{}> = () => <Post post={post}></Post>;

export default { title: 'Post' };
