import React from 'react';
import Head from 'next/head';
import { Header } from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

export const Layout: React.FC<{}> = ({ children }) => (
  <div style={layoutStyle}>
    <Head>
      <title>blog.taku.dev</title>
      <meta charSet="utf-8" />
    </Head>
    <Header />
    {children}
  </div>
);
