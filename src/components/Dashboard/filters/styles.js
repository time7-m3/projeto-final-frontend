import styled from "styled-components";

export const Filter = styled.div`
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  @media screen and (min-width: 426px) and( max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
