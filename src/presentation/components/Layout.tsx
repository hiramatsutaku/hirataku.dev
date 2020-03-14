import React from 'react';
import Head from 'next/head';
import { Header } from './Header';
import styled from 'styled-components';
import { Footer } from './Footer';
import { GlobalStyle } from './GlobalStyle';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px 16px;
  box-sizing: border-box;
  max-width: 800px;
`;

interface Props {
  description?: string;
}

export const Layout: React.FC<Props> = ({ children, description = 'blog.taku.dev' }) => (
  <Wrapper>
    <Head>
      <meta name="description" content={description} />
    </Head>
    <Header />
    <GlobalStyle />
    <main>{children}</main>
    <Footer />
  </Wrapper>
);
