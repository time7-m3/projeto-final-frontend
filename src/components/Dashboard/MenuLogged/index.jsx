import { BiCar, BiLogOut } from "react-icons/bi";
import { MenuStyled } from "./styles";
import User from "../../../assets/user.jpeg";
import { useUser } from "../../../context/HeaderContext";
import { useContext } from "react";
import { AuthCarContext } from "../../../context/CarContext";

const MenuLoged = () => {
  const { logOut, registerCar, editProfile } = useUser();

  const { openModalCreateCar } = useContext(AuthCarContext);

  return (
    <MenuStyled>
      <div className="divContainer">
        <button onClick={() => logOut()}>
          <BiLogOut size={30} />
          <p>Sair</p>
        </button>
        <button onClick={openModalCreateCar}>
          <BiCar size={30} />
          <p>Cadastrar carro</p>
        </button>
        <button onClick={() => editProfile()}>
          <img src={User} alt="imagem de perfil do usuário" />
          <p>Perfil</p>
        </button>
      </div>
    </MenuStyled>
  );
};
export default MenuLoged;
