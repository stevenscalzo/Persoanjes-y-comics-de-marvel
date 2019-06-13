import React from 'react';
import {Link} from 'react-router-dom';

function personaje(props) {
    return <div>
        <h3>{props.name}</h3>
        <Link to={"/personajes/" + props.id}><img src={props.thumbnail.path + '.' + props.thumbnail.extension } alt=""/></Link>
        
    </div>
}


export default personaje;