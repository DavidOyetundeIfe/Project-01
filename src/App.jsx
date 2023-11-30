import React from "react";
import './App.css';
import { Outlet } from "react-router-dom";



function App() {

  const [count, Setcount] = React.useState(0);
  
  return ( 
  <>
  <div className="home">
        <br/><br/><br/><br/><br/>
        <img src="../c1.JPG" alt="house" className="img"/>
        <h4>I am on the fucking moon so let us get the fuck out of the place right now or we will not get to where we are going .</h4>
    <Outlet context ={[count, Setcount]}/>   
     </div>
  </>
      
  );
}

export default App;
