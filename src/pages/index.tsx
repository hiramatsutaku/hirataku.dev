import React from 'react';
import { Layout } from '../presentation/components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';
import { PostRepository } from '../infrastructure/repositories/PostRepository';
import Post from '../domain/post/PostEntity';

interface Props {
  items: Post[];
}

const Index: NextPage<Props> = ({ items }) => (
  <Layout>
    <p>Hello Next.js</p>
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
  const repo = new PostRepository();
  const posts = await repo.getPosts();
  return {
    items: posts,
  };
};

export default Index;
