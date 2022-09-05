import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }
  
  ul ol li{
    list-style: none;
  }
  :root{
    --color1:#292929;
    --color2:#878787;
    --color3:#727272;
    --color4:#eb5600;
    --color5:#1a9988;

    --color5_disable:#1f7d71;
    --color4_disable:#CF4C00;
    --color3_disable:#515151
}
  `;
