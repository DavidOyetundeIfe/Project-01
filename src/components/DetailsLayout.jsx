import React from "react";
import '../App.css';
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function DetailsLayout() {

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
    <div>
         <>
     <br/>
   <NavLink 
   to="../vans"
   style={onhover()}
   >
    Back to Vans page
    </NavLink>
    <br/><br/>
       <div className="my-vans">
                <img src="../../c1.JPG" />
                <h3>Modest Explorer</h3>
                <p>$60/Day</p>
            </div>
            <br/><br/> 
    </>
        <nav>
        <NavLink 
        to="details" 
        style={onhover()}
        >
            Details
            </NavLink>
        <NavLink 
        to="Pricing" 
        style={onhover()}
        >
            Pricing
            </NavLink>
        <NavLink 
        to="photos" 
        style={onhover()}
        >
            Photos
            </NavLink>    
        </nav>
        <Outlet/>
    </div>
)
      
}
    


export default DetailsLayout;