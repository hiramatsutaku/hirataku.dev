import App, { AppContext, AppInitialProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { CodeBlock } from '../presentation/components/CodeBlock';

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
          <title>blog.taku.dev</title>
        </Head>
        <MDXProvider
          components={{
            code: CodeBlock,
          }}
        >
          <Component {...pageProps} />
        </MDXProvider>
      </>
    );
  }
}
