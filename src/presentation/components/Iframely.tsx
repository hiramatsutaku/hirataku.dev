import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 140px;
  padding-bottom: 0;
`;

type Props = {
  href: string;
  iframelyUrl: string;
};

export const Iframely: React.FC<Props> = ({ href, iframelyUrl }) => (
  <Wrapper>
    <a href={href} data-iframely-url={`${iframelyUrl}?iframe=1&omit_script=1`}></a>
  </Wrapper>
);
