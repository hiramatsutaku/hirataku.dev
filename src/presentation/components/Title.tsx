import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: 'bold';
`;

export const Title: React.FC = ({ children }) => <H1>{children}</H1>;
