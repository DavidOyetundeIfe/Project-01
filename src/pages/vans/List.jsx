import React from "react";
import '../../App.css';
import { Link } from "react-router-dom";

function List () {
  const [vans, setVans] = React.useState([])
  /*
  React.useEffect(() => {
    fetch("/api/list")
    .then(res => res.json())
    .then(data => setVans(data.vans))
  } , [])

  const vanElements = vans.map(van => (
    <div>
      <img /> 
      <div>
      <h3></h3>
      <p></p>
      </div>
      <i></i>
    </div>
    

  )) */
    return (
        <div className="list">
        <br/><br/><br/><br/><br/> 
        <div>
          <Link to={`/list/${List.id}`}>
          <img src="../c2.JPG" alt="house" className="img"/>
        <h4>LALAAALALALALALAAA   LAALALALALALLALAAA</h4>
        <button>Details</button>
          </Link>
        </div>
        
     </div>
    )
}

export default List;