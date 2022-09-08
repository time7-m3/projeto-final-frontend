import { BiCar, BiLogOut } from "react-icons/bi";
import { MenuStyled } from "./styles";
import User from "../../../assets/user.jpeg";
import { useUser } from "../../../context/HeaderContext";
import { useContext } from "react";
import { AuthCarContext } from "../../../context/CarContext";
import { AuthContext } from "../../../context/AuthContext";
import { ProfileContext } from "../../../context/ProfileContext";

const MenuLoged = () => {
  const { logOut, editProfile } = useUser();

  const { openModalCreateCar } = useContext(AuthCarContext);
  const { setUser } = useContext(AuthContext);

  const { openModalProfile } = useContext(ProfileContext);

  return (
    <MenuStyled>
      <div className="divContainer">
        <button onClick={() => setUser(null)}>
          <BiLogOut size={30} />
          <p>Sair</p>
        </button>
        <button onClick={openModalCreateCar}>
          <BiCar size={30} />
          <p>Cadastrar carro</p>
        </button>
        <button onClick={openModalProfile}>
          <img src={User} alt="imagem de perfil do usuário" />
          <p>Perfil</p>
        </button>
      </div>
    </MenuStyled>
  );
};
export default MenuLoged;
