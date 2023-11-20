import React from "react";
import '../../App.css';
import { useParams } from "react-router-dom";




function VansDetails() {
  
    const params = useParams();
    return ( 

    <>
     <br/><br/>
     <br/><br/>
       <div className="my-vans">
                <img src="../../c1.JPG" />
                <h3>Modest Explorer</h3>
                <p>$60/Day</p>
            </div>
            <br/><br/> <br/><br/>
    </>
      
    ) 
    
    
}

export default VansDetails;