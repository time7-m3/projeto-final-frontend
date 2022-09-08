import { BiCar, BiLogOut } from "react-icons/bi";
import { MenuStyled } from "./styles";
import User from "../../../assets/user-128.png";
import { useUser } from "../../../context/HeaderContext";
import { useContext, useState } from "react";
import { AuthCarContext } from "../../../context/CarContext";
import { AuthContext } from "../../../context/AuthContext";
import toast from "react-hot-toast";
const MenuLoged = () => {
  const { editProfile } = useUser();
  const { openModalCreateCar } = useContext(AuthCarContext);
  const { setUser, user } = useContext(AuthContext);

  const logout = () => {
    toast.success("Logout");
    window.localStorage.clear();
    setUser(null);
  };
  return (
    <MenuStyled>
      <div className="divContainer">
        <button onClick={logout}>
          <BiLogOut size={30} />
          <p>Sair</p>
        </button>
        <button onClick={openModalCreateCar}>
          <BiCar size={30} />
          <p>Cadastrar carro</p>
        </button>
        <button onClick={() => editProfile()}>
          {user.imagem === "" ? (
            <img
              className="img-no-img"
              src={User}
              alt="imagem de perfil do usuário"
            />
          ) : (
            <div className="btnProfile">
              <img src={user.imagem} alt="imagem de perfil do usuário" />
            </div>
          )}
          <p>Perfil</p>
        </button>
      </div>
    </MenuStyled>
  );
};
export default MenuLoged;
