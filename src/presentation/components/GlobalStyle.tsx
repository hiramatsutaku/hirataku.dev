import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Lato', 'M PLUS Rounded 1c', sans-serif;
  }
`;
