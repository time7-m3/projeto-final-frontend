import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;

  select {
    width: 7.187rem;
    height: 3rem;
    border-radius: 18px;
    border: none;
    background-color: rgba(244, 244, 244, 1);
    margin-right: 0.375rem;
    color: rgba(135, 135, 135, 1);
    font-size: 14px;
    line-height: 16px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    -webkit-appearance: none;
    font-size: 15px;
    padding-right: 20px;
    background-position: 80px;
  }

  .dates {
    width: 17.75rem;
    height: 3rem;
    border-radius: 18px;
    background-color: rgba(244, 244, 244, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.437rem;
  }

  .input-date {
    border: none;
    background-color: transparent;
    width: 6.75rem;
    color: rgba(135, 135, 135, 1);
    font-family: "Poppins", sans-serif;
    font-size: 12px;
  }
  /* input::-webkit-calendar-picker-indicator {
    display: none;
  } */

  .input-date::placeholder {
    font-size: 12px;
  }

  .texto-de {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    margin: 0;
    margin-right: 2px;
  }

  .texto-ate {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    margin: 0;
    margin-right: 2px;
    margin-left: 2px;
  }

  .div-dates-money {
    display: flex;
    margin-top: 12px;
  }

  .money {
    width: 69px;
    height: 3rem;
    background-color: rgba(244, 244, 244, 1);
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-money {
    width: 50px;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
  }

  .texto-money {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    line-height: 16px;
    font-weight: normal;
    margin: 0;
    margin-right: 3px;
    margin-left: 9px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  .url {
    height: 3rem;
    background-color: rgba(244, 244, 244, 1);
    border-radius: 18px;
    width: 22.5rem;
    border: none;
    padding-left: 20px;
    margin-top: 12px;
  }

  .url::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  textarea {
    height: 9.125rem;
    width: 22.5rem;
    border: none;
    background-color: rgba(244, 244, 244, 1);
    border-radius: 18px;
    resize: none;
    margin-top: 12px;
    padding: 10px 20px 10px 20px;
  }

  textarea::placeholder {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
  }

  .button-form {
    width: 22.5rem;
    height: 3rem;
    border-radius: 18px;
    background-color: rgba(26, 153, 136, 1);
    border: none;
    color: rgba(255, 255, 255, 1);
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin-top: 12px;
  }

  .button-form:hover {
    background-color: rgba(31, 125, 113, 1);
  }
`;
