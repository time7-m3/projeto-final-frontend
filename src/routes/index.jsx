import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/register" />} />
    </Routes>
  );
};

export default RoutesMain;
