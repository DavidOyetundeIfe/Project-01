import React from "react";
import '../../App.css';
import { useOutletContext } from "react-router-dom";



function Details() {
    const {currentVan} = useOutletContext();
    return  <>  
    <div>
    <h1>Details welcomes you</h1>
    </div>
   
     </>
}

export default Details;