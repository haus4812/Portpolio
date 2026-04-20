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
    background:
  radial-gradient(
    circle at top right,
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(96, 165, 250, 0.12)"
        : "rgba(37, 99, 235, 0.08)"},
    transparent 24%
  ),
  radial-gradient(
    circle at top left,
    ${({ theme }) =>
      theme.mode === "dark"
        ? "rgba(96, 165, 250, 0.08)"
        : "rgba(37, 99, 235, 0.05)"},
    transparent 18%
  ),
  ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    word-break: keep-all;
  }

  body.modal-open {
    overflow: hidden;
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
    background: rgba(37, 99, 235, 0.14);
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #d9dde4;
    border-radius: 999px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export default GlobalStyle;
