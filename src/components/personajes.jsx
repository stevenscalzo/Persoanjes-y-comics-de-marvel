import React, { Component } from 'react'
import Personaje from './personaje';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = '2e545ee14834e142da6a6da39c3258b5';
const API_URL = 'https://gateway.marvel.com:443/v1/public/characters?apikey=';

class Personajes extends Component {
    constructor() {
        super();
        this.state = {
            personajes: []
        }
    }

    componentDidMount() {
        axios.get(API_URL + API_KEY).then(resp => {
            let personajes = resp.data.data.results;
            console.log(personajes);
            this.setState({ personajes });
        })

    }

    render() {
        return <div>
            <Link to="/">Inicio</Link>
            <Link to={"/comics"}>Comics</Link>
            <h1>Personajes</h1>
            {(this.state.personajes).map((personaje, i) => <Personaje key={i} {...personaje}></Personaje>)}
        </div>
    }
}


export default Personajes;