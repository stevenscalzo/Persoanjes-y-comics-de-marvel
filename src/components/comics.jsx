import React, { Component } from 'react'
import Comic from './comic';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = '2e545ee14834e142da6a6da39c3258b5';
const API_URL = 'https://gateway.marvel.com:443/v1/public/comics?apikey=';

class Comics extends Component {
    constructor() {
        super();
        this.state = {
            comics: []
        }
    }

    componentDidMount() {
        axios.get(API_URL + API_KEY).then(resp => {
            let comics = resp.data.data.results;
            console.log(comics);
            this.setState({ comics });
        })

    }

    render() {
        if (this.state.comics) {
            return <div>
                <Link to="/">Inicio</Link>
                <Link to={"/personajes"}>Personajes</Link>
                <h1>Comics</h1>
                {(this.state.comics).map((comic, i) => <Comic key={i} {...comic}></Comic>)}
            </div>
        } else {
            return <div>
                <h2>Cargando comics...</h2>
            </div>
        }
    }
}


export default Comics;