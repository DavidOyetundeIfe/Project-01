import React from "react";
import '../../App.css';
import { useParams } from "react-router-dom";


function ListDetails () {

    const params = useParams();
    /*
    React.useEffect(() => {
            fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [params.id])
    */
    return  (
        <div className="listdetails">
                <br/><br/><br/><br/><br/>
                <img src="../c1.JPG" alt="house" className="img"/>
                <h4>List Details goes there</h4>
        </div>
    )
}

export default ListDetails;