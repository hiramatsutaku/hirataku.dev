import React from 'react';
import { Layout } from '../../presentation/components/Layout';
import { NextPageContext, NextPage } from 'next';
import PostEntity from '../../domain/post/PostEntity';
import { PostApplicationService } from '../../application/PostApplicationService';
import { Post } from '../../presentation/components/Post';

interface Props {
  item: PostEntity;
}

const PostPage: NextPage<Props> = ({ item }) => {
  return (
    <Layout description={item.title}>
      <Post post={item} />
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
