import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { NextPageContext, NextPage } from 'next';
import { getPostBySlug } from '../../domain/repositories/postRepository';
import Post from '../../domain/entities/PostEntity';
import ReactMarkdown from 'react-markdown';

interface Props {
  item: Post;
}

const PostPage: NextPage<Props> = ({ item }) => {
  const router = useRouter();
  return (
    <Layout>
      <h1>{item.title}</h1>
      <ReactMarkdown source={item.body} skipHtml={true} />
    </Layout>
  );
};

PostPage.getInitialProps = async (context: NextPageContext): Promise<Props> => {
  const entry = await getPostBySlug(context.query.postId as string);
  return {
    item: entry,
  };
};

export default PostPage;
