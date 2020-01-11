import React from 'react';
import Head from 'next/head';
import { Header } from './Header';
import styled from 'styled-components';
import { Footer } from './Footer';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Lato', 'M PLUS Rounded 1c', sans-serif;
  max-width: 800px;
`;

interface Props {
  description?: string;
}

export const Layout: React.FC<Props> = ({ children, description = 'blog.taku.dev' }) => (
  <Wrapper>
    <Head>
      <title>blog.taku.dev</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700|M+PLUS+Rounded+1c:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </Wrapper>
);
