import { createContext, useState } from "react";
import api from "../services";

export const AuthContext = createContext();

const LoginContext = ({ children }) => {
  const [isModalLogin, setIsModalLogin] = useState(false);

  const onLogin = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        const { accessToken, user } = response.data;
        window.localStorage.setItem("@loginToken", accessToken);
        window.localStorage.setItem("@loginId", user.id);
        setIsModalLogin(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ isModalLogin, setIsModalLogin, onLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default LoginContext;
