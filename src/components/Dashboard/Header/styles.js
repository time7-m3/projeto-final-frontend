import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  margin-top: 22px;
  flex-direction: row;
  justify-content: space-between;
  width: 94%;
  max-width: 1000px;

    @media (max-width: 780px) {
    justify-content: space-between;
  } 
  @media ( max-width:425px ) {
      justify-content: center;
  }
  /* @media (max-width: 320px)and (min-width: 779px){
    background-color: azure;
  } */
  /* @media (max-width:769px) and (max-width: 1440px) {
  display: flex;
  justify-content: space-around;
}   */
`
