import { css, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const globalCss = css`
  :root {
    --baseline: 1.75;
    box-sizing: border-box;
    font-size: 1em;
    line-height: var(--baseline);
  }

  body {
    font-family: 'Lato', 'M PLUS Rounded 1c', sans-serif;
  }

  p {
    margin: 0;
    margin-top: calc(var(--baseline) * 1rem);
  }

  ul {
    margin: 0;
    margin-top: calc(var(--baseline) * 1rem);
    padding-left: 1.5em;
  }

  h1 {
    line-height: calc(var(--baseline) * 2rem);
    margin-top: calc(var(--baseline) * 1rem);
    margin-bottom: calc(var(--baseline) * 2rem);
  }

  h2 {
    line-height: calc(var(--baseline) * 2rem);
    margin-top: calc(var(--baseline) * 1rem);
    margin-bottom: calc(var(--baseline) * 1rem);
  }

  h3,
  h4,
  h5,
  h6 {
    line-height: calc(var(--baseline) * 1rem);
    margin: 0;
    margin-top: calc(var(--baseline) * 1rem);
  }

  pre {
    margin: 0;
    margin-top: calc(var(--baseline) * 0.5rem);
    padding: calc(var(--baseline) * 0.5rem);
    overflow: auto;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${normalize} /* stylelint-disable-line value-keyword-case */
  ${globalCss} /* stylelint-disable-line value-keyword-case */
`;
