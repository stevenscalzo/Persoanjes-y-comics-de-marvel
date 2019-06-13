import React from 'react';
import {Link} from 'react-router-dom';

function inicio() {
    return <div>
        <h1>Marvel</h1>
        <Link to={"/comics"}>Comics</Link>
        <Link to={"/personajes"}>Personajes</Link>
    </div>
}


export default inicio;