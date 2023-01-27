import * as React from 'react'
import * as ReactDom from 'react-dom'
import {App} from "../shared/APP.tsx";
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

:root {
  --black:          #333333;
  --orange:         #CC6633;
  --green:          #A4CC33;
  --whiteLightness: 100%;
  --white:          hsl(0, 0%, var(--whiteLightness));
  --grayF4:         hsl(0, 0%, calc(var(--whiteLightness) - 4%));
  --greyF3:         hsl(0, 0%, calc(var(--whiteLightness) - 5%));
  --greyEC:         hsl(0, 0%, calc(var(--whiteLightness) - 7%));
  --greyD9:         hsl(0, 0%, calc(var(--whiteLightness) - 15%));
  --greyC4:         hsl(0, 0%, calc(var(--whiteLightness) - 23%));
  --grey99:         hsl(0, 0%, calc(var(--whiteLightness) - 40%));
  --grey66:         hsl(0, 0%, calc(var(--whiteLightness) - 60%));
}

body {
  padding: 0;
  margin: 0;
  background-color: var(--grayF4);
  font-size: 14px;
  line-height: 16px;
  font-family: 'Roboto', serif;
}

* {
  color: var(--black);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
`

const theme = {
  media: {
    phone: 'all and (min-width: 650px)',
    tablet: 'all and (min-width: 1024px)',
    desctop: 'all and (min-width: 1540px)'
  }
}


window.addEventListener("load", ()=>{
  ReactDom.hydrate(
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>,
  document.getElementById('react_root'));
})