import React from 'react';
import { Layout } from '../presentation/components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';
import Post from '../domain/post/PostEntity';
import { PostApplicationService } from '../application/PostApplicationService';

interface Props {
  items: Post[];
}

const Index: NextPage<Props> = ({ items }) => (
  <Layout>
    <p>Posts</p>
    {items.map(({ slug, title }) => (
      <li key={slug}>
        <Link href={`/posts/[postId]`} as={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </li>
    ))}
  </Layout>
);

Index.getInitialProps = async (): Promise<Props> => {
  const service = new PostApplicationService();
  const posts = await service.getPosts();
  return {
    items: posts,
  };
};

export default Index;
