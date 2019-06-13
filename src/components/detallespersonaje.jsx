import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Detalle from './detalles'


const API_KEY = '2e545ee14834e142da6a6da39c3258b5';
const API_URL = 'https://gateway.marvel.com:443/v1/public/characters/';


class Detalles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personaje: null,
            comics: null
        }

        this.personajeId = props.match.params.id;
        console.log(this.personajeId);


        Axios.get(API_URL + this.personajeId + '/comics?apikey=' + API_KEY).then((resp) => {
            let comics = resp.data.data.results;
            console.log(comics);

            Axios.get(API_URL + this.personajeId + '?apikey=' + API_KEY).then((resp) => {
                let personaje = resp.data.data.results[0];
                console.log(personaje);

                this.setState({
                    personaje
                })
            })
            this.setState({

                comics
            })
        })
    }

    render() {

        if (this.state.personaje) {
            return <div>
                <Link to="/">Inicio</Link>
                <Link to={"/comics"}>Comics</Link>
                <Link to={"/personajes"}>Personajes</Link>
                <h3>{this.state.personaje.name}</h3>
                <img src={this.state.personaje.thumbnail.path + '.' + this.state.personaje.thumbnail.extension} alt="" />
                <h5>{this.state.personaje.description}</h5>
                <h4>Comics donde aparece:</h4>
                {(this.state.comics).map((comic, i) => <Detalle key={i} {...comic}></Detalle>)}


            </div>
        } else {
            return <div>
                <h2>Cargando personaje...</h2>
            </div>
        }
    }
}


export default Detalles;