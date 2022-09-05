import styled from "styled-components";

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */  
  padding: 20px;
  max-width: 1440px;
  @media (min-width: 769px) {
      /* background-color: #ac5880; */
      margin: auto;
      display: flex;
      flex-direction: row;

    }
    h1{
      font-size: 30px;
      color:#EB5600; 
    }
  span{
    color: #292929;    
  }
  `