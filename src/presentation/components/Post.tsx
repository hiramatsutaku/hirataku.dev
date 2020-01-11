import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import IPostEntity from '../../domain/post/PostEntity';

const Wrapper = styled.div`
  padding: 10px;
`;

export const Post: React.FC<{ post: IPostEntity }> = ({ post }) => (
  <Wrapper>
    <h1>{post.title}</h1>
    <ReactMarkdown source={post.body} skipHtml={true} />
  </Wrapper>
);
