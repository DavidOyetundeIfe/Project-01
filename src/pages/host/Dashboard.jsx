import React from "react";
import '../../App.css';
import { useOutletContext } from "react-router-dom";



function Dashboard() {
const [count, Setcount] = useOutletContext();
const increment = () => Setcount((count) = count + 1) ;
    return  <>  
    <div>
    <h1>host welcomes you</h1>
    <button onClick={increment}>{count}</button>
    </div>
   
     </>
}

export default Dashboard;