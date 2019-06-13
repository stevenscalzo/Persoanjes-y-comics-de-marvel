import React from 'react';
import {Link} from 'react-router-dom';

function detalles(props) {
    return <ul>
        <Link to={"/comics/" + props.id}><h6>{props.title}</h6> </Link>
        
        
    </ul>
}


export default detalles;