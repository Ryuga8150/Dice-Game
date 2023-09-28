import { createGlobalStyle } from "styled-components";
/*
- Font sizes (px)
  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
- Spacing system (px)
  2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

- Line heights
  Default: 1
  Small: 1.05
  Medium: 1.2
  Paragraph default: 1.6
  Large: 1.8

- Letter spacing
  -0.5px
  -0.75px
*/
const GlobalStyles = createGlobalStyle`

  :root {
    --color-transparent:transparent;

    // neutral
    --color-neutral-950:#0a0a0a;
    --color-neutral-200:#e5e5e5;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: var(--color-grey-700);

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  button {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;

export default GlobalStyles;
