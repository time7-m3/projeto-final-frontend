import styled from "styled-components";

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */  
  /* margin-top: 20px; */
  
  /* margin: auto; */
  h1{
    font-size: 30px;
    color:var(--color4); 
    font-weight:bold ;
  }
  span{
    color: var(--color1);    
  }
  @media (min-width: 769px) {
      /* background-color: #ac5880;
      margin: auto;
      display: flex;
      flex-direction: row; */
    }
  `