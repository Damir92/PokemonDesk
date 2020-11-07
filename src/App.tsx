import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import s from './App.module.scss';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

const App = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/pokedex" component={Pokedex} />
  </BrowserRouter>
);

export default App;
