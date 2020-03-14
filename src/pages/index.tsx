import React from 'react';
import { Layout } from '../presentation/components/Layout';
import Link from 'next/link';
import { NextPage, GetStaticProps } from 'next';
import { PostFields } from '../domain/post/PostEntity';
import { PostApplicationService } from '../application/PostApplicationService';
import { Title } from '../presentation/components/Title';
import styled from 'styled-components';
import { PostRepository } from '../infrastructure/repositories/PostRepository';

const Li = styled.li`
  padding: 2px;
  font-size: 1.3rem;
`;

interface Props {
  items: PostFields[];
}

const Index: NextPage<Props> = ({ items }) => (
  <Layout>
    <Title text="Posts" />
    <ul>
      {items.map(({ date, title }) => (
        <Li key={date}>
          <Link href={`/posts/[date]`} as={`/posts/${date}`}>
            <a>{title}</a>
          </Link>
        </Li>
      ))}
    </ul>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const postRepository = new PostRepository();
  const service = new PostApplicationService(postRepository);
  const posts = await service.getPosts();
  return {
    props: { items: posts.map(post => ({ ...post })) },
  };
};

export default Index;
