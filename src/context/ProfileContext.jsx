import api from "../services/api";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const ProfileContext = createContext({});

const ProfileProvider = ({ children }) => {
  const { user, loadUser } = useContext(AuthContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [imagemProfile, setImagemProfile] = useState(null);

  console.log(user);
  const openModalProfile = () => {
    setIsProfileOpen(true);
  };

  const closeModalProfile = () => {
    setIsProfileOpen(false);
  };

  const deleteCar = (car) => {
    const token = localStorage.getItem("@loginToken");

    api
      .delete(`/cars/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => ({
        message: console.log(err.response.data),
      }));
  };

  const editUser = (e, data) => {
    e.preventDefault();
    const imagem = { imagem: data };

    const token = localStorage.getItem("@loginToken");

    api
      .patch(`/users/${user.id}`, imagem, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        loadUser();
        setIsProfileOpen(false);
        setImagemProfile(data);
      })
      .catch((err) => ({
        message: console.log(err.response.data),
      }));
  };

  return (
    <ProfileContext.Provider
      value={{
        editUser,
        openModalProfile,
        closeModalProfile,
        isProfileOpen,
        deleteCar,
        setImagemProfile,
        imagemProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
