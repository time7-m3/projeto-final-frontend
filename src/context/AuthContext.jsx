import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

export const AuthContext = createContext();

const LoginContext = ({ children }) => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [user, setUser] = useState(null);

  const openModalLogin = () => {
    setIsModalLogin(true);
  };

  const closedModalLogin = () => {
    setIsModalLogin(true);
  };

  const onLogin = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { accessToken, user } = response.data;
        console.log(response);
        window.localStorage.setItem("@loginToken", accessToken);
        window.localStorage.setItem("@loginId", user.id);
        window.localStorage.setItem("@loginProprietario", user.name);
        toast.success("Usuário Logado com Sucesso!");
        setUser(user.name);
        setIsModalLogin(false);
      })
      .catch((err) => {
        toast.error("Algo de errado aconteceu!");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isModalLogin,
        setIsModalLogin,
        onLogin,
        openModalLogin,
        closedModalLogin,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default LoginContext;
