import React from 'react';
import { Layout } from '../presentation/components/Layout';
import { NextPage } from 'next';
import { Title } from '../presentation/components/Title';

const About: NextPage<{}> = () => (
  <Layout>
    <Title text="About" />
    <ul>
      <li>
        GitHub: <a href="https://github.com/hiramatsutaku">https://github.com/hiramatsutaku</a>
      </li>
    </ul>
  </Layout>
);

export default About;
