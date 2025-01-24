import React from "react";
import '../../App.css';
import { NavLink , useSearchParams} from "react-router-dom";
import Footer from "../../components/Footer";




function Vans( ) {
const [SearchParams, setSearchParams] = useSearchParams();

const typeFilter = SearchParams.get("type");


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
                <img src="../c1.JPG" alt="pics" />
            <NavLink  to={`${Vans.id}`}style={onhover()} type="Jedi" >
                <h3>Modest Explorer</h3>
                <p>$60/Day</p>
            </NavLink>
            </div>
            <br/>
            <div className="my-vans">
                <img src="../c2.JPG" alt="pics" />
            <NavLink  to={`${Vans.id}`} style={onhover()} type="Sith">
                <h3>Baech Bum</h3>
                <p>$80/Day</p>
            </NavLink>
            </div>
            <br/>
            <div className="my-vans">
                <img src="../c3.JPG" alt="pics" />
            <NavLink to={`${Vans.id}`} style={onhover()} type="Sith">
                <h3>Night life</h3>
                <p>$40/Day</p>
            </NavLink>
            </div>
            <br/>
            <div className="my-vans">
                <img src="../c4.JPG" alt="pics" />
            <NavLink to={`${Vans.id}`} style={onhover()} type="Jedi" >
                <h3>Party Lit</h3>
                <p>$500/Day</p>
            </NavLink>
            </div>
            <br/>
          
         
            <br/> <br/>
            <Footer/>
       </div>
    )
    
     
}

export default Vans;