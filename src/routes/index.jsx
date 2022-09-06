import { Routes, Route, Navigate } from "react-router-dom";
import { CardCar } from "../components/CardCarModal";
import Dashboard from "../pages/Dashboard";
import ModalPerfil from "../components/Dashboard/ModalPerfil";
import ModalLogin from "../components/ModalLogin";
import Register from "../pages/Register";
import { PaymentModal } from "../components/PaymentModal";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<ModalLogin />} />
      {/*Provisório para testes*/}
      <Route path="/perfil" element={<ModalPerfil />} />
      {/*Provisório para testes*/}
      <Route path="/pix" element={<PaymentModal />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/*Provisório para testes*/}
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/register" />} />
    </Routes>
  );
};

export default RoutesMain;
