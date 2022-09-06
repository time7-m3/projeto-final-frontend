import { createContext, useState } from "react";

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

  const createCar = (data) => {
    data.periodo = [...[], userInput, userInput2];
    // data.userId = 1;
    // data.proprietario = "Paulo";
    // data.userId = localStorage.getItem()
    // data.proprietario = localStorage.getItem()
    console.log(data);
    // api
    //   .post("/cars", data, {
    //     headers: {
    //       Authotization: `Bearer token`,
    //     },
    //   })
    //   .then((response) => {
    //     window.localStorage.setItem("@CarroId", response.id);
    //     setModalCar(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
