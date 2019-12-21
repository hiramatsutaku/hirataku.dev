import Layout from '../components/Layout';
import Link from 'next/link';
import { createClient, Entry } from 'contentful';
import { NextPage } from 'next';
import { PostFields } from '../domain/entities/PostEntity';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});
const POST_CONTENT_TYPE = 'post';

interface Props {
  items: Entry<PostFields>[];
}

const Index: NextPage<Props> = ({ items }) => (
  <Layout>
    <p>Hello Next.js</p>
    {items.map(({ fields }) => (
      <li key={fields.title}>
        <Link href={`/p/[postId]`} as={`/p/${fields.title}`}>
          <a>{fields.title}</a>
        </Link>
      </li>
    ))}
  </Layout>
);

Index.getInitialProps = async (): Promise<Props> => {
  const entries = await client.getEntries<PostFields>({
    content_type: POST_CONTENT_TYPE,
  });
  return {
    items: entries.items,
  };
};

export default Index;
