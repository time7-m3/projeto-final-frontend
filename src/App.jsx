import { useContext } from "react";
import "./App.css";
import ModalLogin from "./components/ModalLogin";
import { AuthContext } from "./context/AuthContext";
import Global from "./styles/Global";

function App() {
  const { isModalLogin, setIsModalLogin } = useContext(AuthContext);

  const openModalLogin = () => {
    setIsModalLogin(true);
  };

  return (
    <>
      <Global />
      <button onClick={openModalLogin}>Abrir Modal</button>
      {isModalLogin && <ModalLogin />}
    </>
  );
}

export default App;
