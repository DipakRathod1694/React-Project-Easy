import {NavLink} from "react-router-dom"
import "./Navbar.css";

const Navbar = ()=>{
    return (
        <nav className="navbar">
            <NavLink className="navlink" to="/"> Home </NavLink>
            <NavLink className="navlink" to="/projects"> Projects </NavLink>
            <NavLink className="navlink" to="/skills"> Skills </NavLink>
            <NavLink className="navlink" to="/testimonial"> Testimonial </NavLink>
            <NavLink className="navlink" to="/contact"> Contact </NavLink>
        </nav>
    )
}

export default Navbar;