import api from "../services/api";
import { createContext, useState } from "react";

export const ProfileContext = createContext({});

const ProfileProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = {
    carrosAlugados: [],
    carrosCadastrados: [],
    confirmPassword: "123456",
    email: "bruno@gmail.com",
    id: 6,
    imagem: "https://static-cse.canva.com/blob/759723/DrobotDeanCanva.jpg",
    name: "Bruno Sergio",
    telefone: "12985444785",
  };

  const editUser = (data) => {
    const token = localStorage.getItem("@loginToken");

    //console.log(data);
    api
      .patch(`/users/${user.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setIsModalOpen(false);
      })
      .catch((err) => ({
        message: console.log(err.response.data),
      }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteCar = (car) => {
    // const filter = user.carrosCadastrados.filter((elem) => elem.id !== car.id).map((elem) =>)
  };

  return (
    <ProfileContext.Provider
      value={{ editUser, openModal, closeModal, isModalOpen, deleteCar }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
