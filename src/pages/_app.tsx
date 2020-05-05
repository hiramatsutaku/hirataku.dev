import App, { AppContext, AppInitialProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from '../presentation/components/CodeBlock';
import { Title } from '../presentation/components/Title';

export default class extends App {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>blog.hirataku.dev</title>
        </Head>
        <MDXProvider
          components={{
            h1: Title,
            code: CodeBlock,
          }}
        >
          <Component {...pageProps} />
        </MDXProvider>
      </>
    );
  }
}
