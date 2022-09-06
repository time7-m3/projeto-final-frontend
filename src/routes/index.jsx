import { Routes, Route, Navigate } from "react-router-dom";
import ModalPerfil from "../components/Dashboard/ModalPerfil";
import ModalCreateCar from "../components/ModalCreateCar";
import ModalLogin from "../components/ModalLogin";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<ModalLogin />} />
      {/*Provisório para testes*/}
      <Route path="/perfil" element={<ModalPerfil />} />
      {/*Provisório para testes*/}
      <Route path="/carro" element={<ModalCreateCar />} />
      {/*Provisório para testes*/}
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/register" />} />
    </Routes>
  );
};

export default RoutesMain;
