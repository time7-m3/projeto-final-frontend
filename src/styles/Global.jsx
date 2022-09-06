import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;800;900&family=Poppins:wght@400;500;700&display=swap');

 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  button{
    cursor: pointer;
  }
  
  ul ol li{
    list-style: none;
  }
  :root{
    --color0:#ffffff;
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
