import './App.css';
import Nav from './components/nav/Nav.jsx'
import Cards from './components/cards/Cards.jsx'
import { Route } from 'react-router-dom';
import React from 'react';

function App() {


  return (
    <React.Fragment>
      <Route exact path='/' component={<Nav/>}/>
      <Route exact path='/' component={<Cards/>}/>
    </React.Fragment>
  );
}

export default App;
