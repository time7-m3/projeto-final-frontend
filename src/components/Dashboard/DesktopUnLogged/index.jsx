import { BiLogIn } from "react-icons/bi"
import { useUser } from "../../../context/HeaderContext"

const DesktopUnLogged=()=>{

  const {login}=useUser()

  return(
    <div className="divButtons">
      <button onClick={()=>login()}>
          <BiLogIn size={30} /> 
             Entrar 
        </button>
      </div>
  )

}

export default DesktopUnLogged