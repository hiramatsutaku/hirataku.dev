import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-weight: 'bold';
`;

interface Props {
  text: string;
}

export const Title: React.FC<Props> = ({ text }) => <H1>{text}</H1>;
