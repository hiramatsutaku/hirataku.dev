import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';
import { getPosts } from '../domain/repositories/postRepository';
import Post from '../domain/entities/PostEntity';

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
  const posts = await getPosts();
  return {
    items: posts,
  };
};

export default Index;
