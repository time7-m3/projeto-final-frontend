import { BiLogIn } from "react-icons/bi"
import { useUser } from "../../../context/HeaderContext"
import { MenuStyled } from "../MenuLogged/styles"


const MenuUnLoged=()=>{

  const {login}=useUser()

  return(
    <MenuStyled>
      <div className="divContainer">
      <button onClick={()=>login()}>
          <BiLogIn size={30} /> 
             Entrar 
        </button>
      </div>
      </MenuStyled>
  )
}

export default MenuUnLoged