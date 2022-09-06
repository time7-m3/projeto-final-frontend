import { BiLogIn } from "react-icons/bi";
import { MenuStyled } from "../MenuLogged/styles";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const MenuUnLoged = () => {
  const { openModalLogin } = useContext(AuthContext);

  return (
    <MenuStyled>
      <div className="divContainer">
        <button onClick={openModalLogin}>
          <BiLogIn size={30} />
          Entrar
        </button>
      </div>
    </MenuStyled>
  );
};

export default MenuUnLoged;
