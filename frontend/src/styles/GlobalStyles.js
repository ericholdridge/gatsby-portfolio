import { createGlobalStyle } from "styled-components";
import "@fortawesome/fontawesome-svg-core/styles.css";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #2d2e32;
    font-family: 'Open Sans', sans-serif;
  }

`;
export default GlobalStyle;
