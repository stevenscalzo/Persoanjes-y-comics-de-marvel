import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import DetallesPersonaje from './components/detallespersonaje';
import Personajes from './components/personajes';
import Comics from './components/comics';
import DetalleComics from './components/detallescomic'
import inicio from './components/inicio';

const router = (
    <BrowserRouter>
        <Switch>
            <Route path="/personajes/:id" component={DetallesPersonaje} exact/>
            <Route path="/personajes" component={Personajes} exact/>
            <Route path="/comics" component={Comics} exact/>
            <Route path="/comics/:id" component={DetalleComics} exact/>
            <Route path="/" component={inicio} exact/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
