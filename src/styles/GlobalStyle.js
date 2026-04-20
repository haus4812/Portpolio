import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    word-break: keep-all;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button, input, textarea {
    font: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ::selection {
    background: rgba(49, 130, 246, 0.15);
  }
`;

export default GlobalStyle;
