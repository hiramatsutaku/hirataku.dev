import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer: React.FC<{}> = () => (
  <Wrapper>
    <small>2020©hirataku</small>
  </Wrapper>
);
