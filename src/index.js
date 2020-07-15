import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SaveMovie from './Components/Savemovie'
import ShowMovies from './Components/ShowMovies';


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={SaveMovie}></Route>
    <Route path="/movieList" component={ShowMovies}></Route>
  </BrowserRouter>,document.getElementById('root'))

