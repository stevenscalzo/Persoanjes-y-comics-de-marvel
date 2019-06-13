import React from 'react';
import {Link} from 'react-router-dom';

function comic(props) {
    return <div>
        <h3>{props.title}</h3>
        <Link to={"/comics/" + props.id}><img src={props.thumbnail.path + '.' + props.thumbnail.extension} alt=""/></Link>
        
    </div>
}


export default comic;