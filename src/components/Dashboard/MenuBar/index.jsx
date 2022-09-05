import { useState } from "react"
import { BiCar, BiExit, BiLogIn, BiLogOut } from "react-icons/bi"
import DesktopLogged from "../DesktopLogged"
import { DesktopLoggedStyled } from "../DesktopLogged/DesktopLoggedStyled"
import DesktopUnLogged from "../DesktopUnLogged"
import User from "../../../assets/user.jpeg"
import { MenuDiv } from "./styles"
import { useUser } from "../../../context/HeaderContext"

const MenuBar=()=>{
  
    const { user, setUser, } = useUser(); 
    
    return(
        <MenuDiv>
            {user?<DesktopLogged/>
            :<DesktopUnLogged/>}        
        </MenuDiv>
    )
}

export default MenuBar