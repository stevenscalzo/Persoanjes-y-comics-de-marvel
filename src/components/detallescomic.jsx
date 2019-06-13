import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Detalle from './detallesencomics';

const API_KEY = '2e545ee14834e142da6a6da39c3258b5';
const API_URL = 'https://gateway.marvel.com:443/v1/public/comics/';


class Detalles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comic: null,
            personajes: null
        }
    

        this.comicId = props.match.params.id;

        Axios.get(API_URL + this.comicId + '/characters?apikey=' + API_KEY).then((resp) => {
            let personajes = resp.data.data.results;
            console.log(personajes);
            
            Axios.get(API_URL + this.comicId + '?apikey=' + API_KEY).then((resp) => {
                let comic = resp.data.data.results[0];
                console.log(comic);
                this.setState({
                    comic
                })
            })
            this.setState({
                personajes
            })
        })
    }

    render() {

                if(this.state.comic) {
            return <div>
                <Link to="/">Inicio</Link>
                <Link to={"/comics"}>Comics</Link>
                <Link to={"/personajes"}>Personajes</Link>
                <h3>{this.state.comic.title}</h3>
                <img src={this.state.comic.thumbnail.path + '.' + this.state.comic.thumbnail.extension} alt="" />
                <h5>{this.state.comic.description}</h5>
                <h4>Personajes que aparecen:</h4>
                {(this.state.personajes).map((personaje, i) => <Detalle key={i} {...personaje}></Detalle>)}
            </div>
        } else {
            return <div>
                <h2>Cargando comic...</h2>
            </div>
        }
    }
}


export default Detalles;