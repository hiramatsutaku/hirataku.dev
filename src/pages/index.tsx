import React from 'react';
import { Layout } from '../presentation/components/Layout';
import Link from 'next/link';
import { NextPage } from 'next';
import Post from '../domain/post/PostEntity';
import { PostApplicationService } from '../application/PostApplicationService';
import { Title } from '../presentation/components/Title';
import styled from 'styled-components';

const Li = styled.li`
  padding: 2px;
  font-size: 1.3rem;
`;

interface Props {
  items: Post[];
}

const Index: NextPage<Props> = ({ items }) => (
  <Layout>
    <Title text="Posts" />
    <ul>
      {items.map(({ slug, title }) => (
        <Li key={slug}>
          <Link href={`/posts/[slug]`} as={`/posts/${slug}`}>
            <a>{title}</a>
          </Link>
        </Li>
      ))}
    </ul>
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
