import { createGlobalStyle } from "styled-components";

<<<<<<< HEAD
export const GlobalStyled = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;500;600;700;800;900&family=Poppins:wght@400;500;700&display=swap');

 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
=======
export default createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

*{
	box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
>>>>>>> d11233413003fab785303559cb2c65333753da21

button{
    cursor: pointer;
  }
<<<<<<< HEAD
  
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
=======
`;
>>>>>>> d11233413003fab785303559cb2c65333753da21
