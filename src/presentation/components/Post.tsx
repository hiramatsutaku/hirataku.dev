import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { PostEntity } from '../../domain/post/PostEntity';

const Wrapper = styled.div`
  padding: 0;
`;

export const Post: React.FC<{ post: PostEntity }> = ({ post }) => {
  const MdxComponent = dynamic(() => import(`../../posts/${post.date}`));
  return (
    <Wrapper>
      <MdxComponent />
    </Wrapper>
  );
};
