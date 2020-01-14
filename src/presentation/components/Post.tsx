import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import IPostEntity from '../../domain/post/PostEntity';
import { Title } from './Title';

const Wrapper = styled.div`
  padding: 0;
`;

export const Post: React.FC<{ post: IPostEntity }> = ({ post }) => (
  <Wrapper>
    <Title text={post.title} />
    <ReactMarkdown source={post.body} skipHtml={true} />
  </Wrapper>
);