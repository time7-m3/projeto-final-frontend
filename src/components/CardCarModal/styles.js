import styled from "styled-components";

export const CarDiv = styled.div`
  background-color: pink;
  width: 90vw;
  margin: auto;
  margin-top: 20px;
  border-radius: 16px;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .carImageBox {
    width: 90vw;
    margin: auto;
    .carImage {
      margin-top: 25px auto;
      opacity: 80%;
      width: 98%;
      border-radius: 16px;
    }
  }
  .carTitle {
    align-self: center;
    h1 {
      margin: 0;
    }

    h2 {
      margin: 0;
    }
  }

  .carOwner {
    display: flex;
    justify-content: space-between;
    background-color: green;
    flex: 1;
    align-items: center;
  }

  .Right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .Left {
    display: flex;
    align-items: center;
  }

  .carPeriod {
    align-self: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: blue;
    width: 100%;
  }

  .carDescription {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      text-align: left;
      background-color: gray;
      display: flex;
    }
  }

  p {
    margin: 0;
    font-weight: 700;
  }

  span {
  }

  button {
    border: none;
    color: white;
    background-color: lightgreen;
  }

  @media (min-width: 426px) {
    background: green;
  }

  @media (min-width: 769px) {
    background: blue;
  }
`;
