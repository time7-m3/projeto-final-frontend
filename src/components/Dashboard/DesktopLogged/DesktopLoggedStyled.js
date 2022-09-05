import styled from "styled-components";

export const            DesktopLoggedStyled=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80vw;
   
  /* position:fixed;
  bottom:10px ; */   
    
    button{
      background-color: transparent;
      border: none;
      font-size: 24px;
      color: #fff;
     } 
    img{
      height: 30px;
      border:solid 2px #fff;
      border-radius: 6px;
    }
/* midia query mobile */
    @media ( max-width:425px ) {
      position:fixed;
      bottom:10px ;
      background-color: #1A9988;
      height: 48px;
      border-radius: 18px; 
        p{display: none;} 
    }

    /* media query desktop */

    @media ( min-width:426px ) {
     width:40vw;
     text-align: right;
     p,button{
       color: #292929;
       display:flex;
       align-items: center;
       padding-top: 20px;

     }
     img{
      border:solid 2px #292929;
     }
    }
  
`