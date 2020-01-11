import React from 'react';
import Head from 'next/head';
import { Header } from './Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  font-family: 'Lato', 'M PLUS Rounded 1c', sans-serif;
`;

export const Layout: React.FC<{}> = ({ children }) => (
  <Wrapper>
    <Head>
      <title>blog.taku.dev</title>
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700|M+PLUS+Rounded+1c:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    {children}
  </Wrapper>
);
