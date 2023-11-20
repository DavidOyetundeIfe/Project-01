import React from "react";
import '../../App.css';
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";



function Vans() {
    function onhover() {
        const activeStyle = {
          textDecoration: "none",
          fontWeight: "bold",
          color: "red"
        }
    
    return(
      ({isActive}) => isActive? activeStyle : null
    )
      }
    return ( 
        <div >
            <h1>Your listed vans</h1>
            <div className="my-vans">
                <img src="../c1.JPG" />
            <NavLink 
            to={`${Vans.id}`}
            style={onhover()}
            >
                <h3>Modest Explorer</h3>
                <p>$60/Day</p>
            </NavLink>
            </div>
            <br/>
            <div className="my-vans">
                <img src="../c2.JPG" />
            <NavLink 
            to={`${Vans.id}`}
            style={onhover()}
            >
                <h3>Baech Bum</h3>
                <p>$80/Day</p>
            </NavLink>
            </div>
            <br/>
            <div className="my-vans">
                <img src="../c3.JPG" />
            <NavLink 
            to={`${Vans.id}`}
            style={onhover()}
            >
                <h3>Night life</h3>
                <p>$40/Day</p>
            </NavLink>
            </div>
            <br/>
            <div className="my-vans">
                <img src="../c4.JPG" />
            <NavLink 
            to={`${Vans.id}`}
            style={onhover()}
            >
                <h3>Party Lit</h3>
                <p>$500/Day</p>
            </NavLink>
            </div>
            <br/>
            <div className="my-vans">
                <img src="../c5.JPG" />
            <NavLink 
            to={`${Vans.id}`}
            style={onhover()}
            >
                <h3>Baller field</h3>
                <p>$800/Day</p>
            </NavLink>
            </div>
            <br/>
            <div className="my-vans">
                <img src="../c6.JPG" />
            <NavLink 
            to={`${Vans.id}`}
            style={onhover()}
            >
                <h3>Rich As Fuck</h3>
                <p>$10000/Day</p>
            </NavLink>
            </div>
            <br/> <br/>
       <Footer/>
    </div>
    )
    
     
}

export default Vans;