import styled from "styled-components";
export const PerfilMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 18px;
  width: 358px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.05);
  .btnCloseModal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -8px;
    left: 160px;
    width: 20px;
    height: 20px;
    border-style: none;
    border-radius: 50%;
    background-color: transparent;
    :hover {
      cursor: pointer;
    }
  }
  .btnImagePerfil {
    width: 128px;
    height: 128px;
    margin-top: -28px;
    border-style: none;
    border-radius: 50%;
    :hover {
      cursor: pointer;
    }
  }
  h1 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    text-align: center;
    color: #292929;
  }
  .userInputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
    input {
      height: 48px;
      font-family: "Poppins";
      font-weight: 300;
      font-size: 14px;
      color: #878787;
      padding-left: 18px;
      border-radius: 18px;
      border-style: none;
      background-color: #f4f4f4;
    }
    p {
      width: 100%;
      font-family: "Poppins";
      font-weight: 500;
      font-size: 14px;
      text-align: left;
      color: #292929;
    }
    .listaCarros {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 8px;
    }
    .itemCarro {
      width: 114px;
      height: 74px;
      border-radius: 18px;
      background-color: #f4f4f4;
      .btnRemoveCarro {
        width: 26px;
        height: 26px;
        position: relative;
        top: 44px;
        left: 38px;
        border-style: none;
        border-radius: 50%;
        background-color: #eb5600;
        :hover {
          cursor: pointer;
        }
      }
    }
    .btnSalvar {
      width: 100%;
      height: 48px;
      font-family: "Poppins";
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      color: #ffffff;
      border-radius: 18px;
      border-style: none;
      background-color: #1a9988;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
