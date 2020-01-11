import React from 'react';
import { Layout } from '../presentation/components/Layout';
import { NextPage } from 'next';
import { Title } from '../presentation/components/Title';

const About: NextPage<{}> = () => (
  <Layout>
    <Title text="About" />
    <div>
      GitHub: <a href="https://github.com/hiramatsutaku">https://github.com/hiramatsutaku</a>
    </div>
  </Layout>
);

export default About;
