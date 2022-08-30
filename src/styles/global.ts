import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    --bgDefault: #e6e6e6;
    --primary: #505050;
    --secondary: #1f1f1f;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 65.5%;
  }

  html, body, #__next{
    height: 100%;
  }

  .sb-show-main.sb-main-padded{
    padding: 0;
  }

  body, input, textarea, select, button{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.4;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyles
