import styled from "styled-components";

export const Main = styled.div`
  @media screen and (max-width: 425px) {
    max-width: 360px;
    max-height: 640px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 20px;
  }
  @media screen and (min-width: 426px) and( max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
  }
  .mainHeader {
    @media screen and (max-width: 425px) {
      margin-top: 9px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      padding: 0px 20px;
      padding: 10px;
      width: 337px;
      height: 177px;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    @media screen and (min-width: 426px) and (max-width: 768px) {
      margin-top: 9px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
      padding: 0px 20px;
      padding: 10px;
      width: 90%;
      height: 177px;
      margin: 0 auto;
      border-radius: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    @media screen and (min-width: 769px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 0px 20px;
      width: 90%;
      max-height: 100px;
      padding: 10px;
      align-items: center;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      margin: 0 auto;
      border-radius: 20px;
      flex-wrap: wrap;
    }
  }
  .mainHeaderLocation {
    @media screen and (max-width: 425px) {
      width: 320.6px;
      height: 50px;
    }
    @media screen and (min-width: 426px) and( max-width: 768px) {
      display: flex;
      flex-direction: row;
    }
    @media screen and (min-width: 769px) {
      width: 403.04px;
      height: 50px;
    }
  }

  .mainHeaderFilters {
    @media screen and (max-width: 425px) {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    @media screen and (min-width: 426px) and( max-width: 768px) {
    }
    @media screen and (min-width: 769px) {
      display: flex;
      flex-direction: row;
    }
  }
  .mainHeaderDates {
    @media screen and (max-width: 425px) {
      display: flex;
      align-items: center;
      width: 265px;
      height: 48px;
      background-color: #f4f4f4;
      border-radius: 20px;
      margin-top: 10px;
      font-size: 14px;
      line-height: 16px;
      color: #292929;
    }
    @media screen and (min-width: 426px) and( max-width: 768px) {
    }
    @media screen and (min-width: 769px) {
      margin-left: 10px;
      display: flex;
      width: 280px;
      height: 48px;
      align-items: center;
      background-color: #f4f4f4;
      border-radius: 20px;
      max-width: 30%;
    }
  }
  .mainHeaderDatesIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    font-size: 20px;
  }
  .mainHeaderSearch {
    @media screen and (max-width: 425px) {
      display: flex;
      font-size: 20px;
      color: white;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      width: 40px;
      height: 40px;
      background-color: #eb5600;
    }
    @media screen and (min-width: 426px) and( max-width: 768px) {
    }
    @media screen and (min-width: 769px) {
      display: flex;
      font-size: 20px;
      color: white;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      width: 40px;
      height: 40px;
      background-color: #eb5600;
    }
  }
  ul {
    @media screen and (max-width: 425px) {
      display: flex;
      overflow-x: auto;
      width: inherit;
      height: max-content;
      align-items: center;
      padding: 32px;
      list-style: none;
    }
    @media screen and (min-width: 426px) and( max-width: 768px) {
    }
    @media screen and (min-width: 769px) {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      margin: 0 auto;
      overflow: unset;
      list-style: none;
      gap: 20px;
    }
  }
`;
