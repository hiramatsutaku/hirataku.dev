import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import IPostEntity from '../../domain/post/PostEntity';
import { Title } from './Title';

const Wrapper = styled.div`
  padding: 0;
`;

export const Post: React.FC<{ post: IPostEntity }> = ({ post }) => {
  const MdxComponent = dynamic(() => import(`../../posts/${post.slug}.mdx`));
  return (
    <Wrapper>
      <Title text={post.title} />
      <MdxComponent />
    </Wrapper>
  );
};
