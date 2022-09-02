import api from "../services/api";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext({});

const RegisterProvider = ({ children }) => {
  // const navigate = useNavigate();

  const registerUser = (e, data) => {
    console.log(data);
    // api
    //   .post("/register", data)
    //   .then((response) => {
    //     navigate("/dashboard", { replace: true });
    //   })
    //   .catch((err) => ({
    //     message: console.log(err.response.data),
    //   }));
  };

  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
