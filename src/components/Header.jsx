import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";

function Header () {
 

  function onhover() {
    const activeStyle = {
      fontWeight: "bold",
      color: "red"
    }

return(
  ({isActive}) => isActive? activeStyle : null
)
  }
    return (
        <nav>
          <NavLink 
          to="/"
          style={onhover()}
          >
            <h1>#VANLIFE</h1>
            </NavLink>
          <NavLink 
          to="/host"
          style={onhover()}
          >
            Host
            </NavLink>
          <NavLink 
          to="/about" 
          style={onhover()}
          >
            About
            </NavLink>
          <NavLink 
          to="/views"
          style={onhover()}
          >
            Views
            </NavLink>
          <NavLink 
          to="/list"
          style={onhover()}
          >
            List
            </NavLink>
        </nav>
    )
}

export default Header;