import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

export const AuthCarContext = createContext();

const CarContext = ({ children }) => {
  const [isModalCar, setModalCar] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [userInput2, setUserInput2] = useState("");

  const openModalCreateCar = () => {
    setModalCar(true);
  };

  const closedModalCreateCar = () => {
    setModalCar(false);
  };

  const token = window.localStorage.getItem("@loginToken");

  const createCar = (data) => {
    data.período = [...[], userInput, userInput2];
    data.alugado = false;
    data.userId = window.localStorage.getItem("@loginId");
    data.proprietario = window.localStorage.getItem("@loginProprietario");
    console.log(data);
    api
      .post("/cars", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Carro cadastrado com sucesso!");
        window.localStorage.setItem("@CarroId", response.id);
        setModalCar(false);
      })
      .catch((err) => {
        toast.error("Erro ao cadastrar carro!");
        console.log(err);
      });
  };

  return (
    <AuthCarContext.Provider
      value={{
        isModalCar,
        setModalCar,
        openModalCreateCar,
        closedModalCreateCar,
        userInput,
        setUserInput,
        userInput2,
        setUserInput2,
        createCar,
      }}
    >
      {children}
    </AuthCarContext.Provider>
  );
};

export default CarContext;
