import { NavLink } from "react-router-dom"
import Profile from "./Profile"

export const Navbar =()=>{

    const NavLinkStyle = ({isActive}) =>{
        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline' 
        }
    }

    return(
        <nav class='primary_nav'>
            <NavLink style={NavLinkStyle} to={'/products'}/>
            <NavLink style={NavLink} to={'profile'}>Profile Page</NavLink>
        </nav>
    )

}