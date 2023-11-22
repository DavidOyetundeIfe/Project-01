import React from "react";
import '../../App.css';
import { useOutletContext } from "react-router-dom";



function Photos() {
    const {currentVan} = useOutletContext();
    return  <>  
    <div>
    <h1>Photos welcomes you</h1>
    </div>
   
     </>
}

export default Photos;