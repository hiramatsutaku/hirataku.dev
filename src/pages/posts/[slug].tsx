import React from 'react';
import { Layout } from '../../presentation/components/Layout';
import { NextPageContext, NextPage } from 'next';
import { PostRepository } from '../../infrastructure/repositories/PostRepository';
import Post from '../../domain/post/PostEntity';
import ReactMarkdown from 'react-markdown';

interface Props {
  item: Post;
}

const PostPage: NextPage<Props> = ({ item }) => {
  return (
    <Layout>
      <h1>{item.title}</h1>
      <ReactMarkdown source={item.body} skipHtml={true} />
    </Layout>
  );
};

PostPage.getInitialProps = async (context: NextPageContext): Promise<Props> => {
  const repo = new PostRepository();
  const entry = await repo.getPostBySlug(context.query.slug as string);
  return {
    item: entry,
  };
};

export default PostPage;
