import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";

export const AuthContext = createContext();

const LoginContext = ({ children }) => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    loadUser();
  }, []);
  async function loadUser() {
    const token = window.localStorage.getItem("@authContext:token");
    const idUsuario = window.localStorage.getItem("@loginId");
    if (token) {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const { data } = await api.get(`/users/${idUsuario}`);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
  }

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
        window.localStorage.setItem("@loginToken", accessToken);
        window.localStorage.setItem("@loginId", user.id);
        window.localStorage.setItem("@loginProprietario", user.name);
        toast.success("Usuário Logado com Sucesso!");
        setUser(user);
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
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default LoginContext;
