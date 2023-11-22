import React from "react";
import './../App.css'
import { NavLink, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";


function HostLayout () {
    const { id } = useParams();
    const [currentVan, setCurrerntVan] = React.useState(null)

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
        <>
        <div className="host-page">
             <nav>
                <NavLink 
                to="/host"
                end
                style={onhover()}
                >
                    Dashboard
                    </NavLink>

                <NavLink 
                to="income"
                style={onhover()}
                >
                    Income
                    </NavLink>
                    <NavLink 
                to="vans"
                style={onhover()}
                >
                    Vans
                    </NavLink>
                <NavLink 
                to="reviews"
                style={onhover()}
                >
                    Reviews
                    </NavLink>
            </nav>
            <Outlet context={{currentVan}}/>
        </div>
       
        </>
        
    )
  
  
}

export default HostLayout;