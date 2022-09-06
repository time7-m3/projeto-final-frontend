


import { MenuDiv } from "./styles"
import { useUser } from "../../../context/HeaderContext"
import MenuLoged from "../MenuLogged"
import MenuUnLoged from "../MenuUnLogged"

const MenuBar=()=>{
  
    const { user,} = useUser(); 
    
    return(
        <MenuDiv>
            {user?<MenuLoged/>
            :<MenuUnLoged/>}                    
        </MenuDiv>
    )
}

export default MenuBar