import React from 'react';
import { Layout } from '../../presentation/components/Layout';
import { NextPageContext, NextPage } from 'next';
import Post from '../../domain/post/PostEntity';
import ReactMarkdown from 'react-markdown';
import { PostApplicationService } from '../../application/PostApplicationService';

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
  const service = new PostApplicationService();
  const entry = await service.getPostBySlug(context.query.slug as string);
  return {
    item: entry,
  };
};

export default PostPage;
