import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  margin-top: 22px;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 425px) {
    justify-content: center;
  }
`;
