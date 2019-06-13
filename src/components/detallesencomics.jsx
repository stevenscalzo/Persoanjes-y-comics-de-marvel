import React from 'react';
import {Link} from 'react-router-dom';


function detalles(props) {
    return <ul>
        <Link to={"/personajes/" + props.id}><h6>{props.name}</h6> </Link>
        
        
    </ul>
}


export default detalles;