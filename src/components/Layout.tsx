import React from 'react';
import Head from 'next/head';
import { Header } from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  fontFamily: "'Lato', 'M PLUS Rounded 1c', sans-serif",
};

export const Layout: React.FC<{}> = ({ children }) => (
  <div style={layoutStyle}>
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
  </div>
);
