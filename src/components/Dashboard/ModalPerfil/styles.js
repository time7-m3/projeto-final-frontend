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
    display: flex;
    justify-content: center;
    width: 128px;
    height: 128px;
    margin-top: -28px;
    border-style: none;
    border-radius: 50%;
    overflow: hidden;

    :hover {
      cursor: pointer;
    }

    img {
      margin-top: -5px;
      height: 135px;
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
    width: 100%;
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

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }

    .btnEdit {
      background-color: transparent;
      border-style: none;
    }

    span {
      font-family: "Poppins";
      font-weight: 00;
      font-size: 10px;
      text-align: right;
      color: #eb5600;
      width: 100%;
      height: 10px;
      margin-top: -6px;
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
        left: 84px;
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
