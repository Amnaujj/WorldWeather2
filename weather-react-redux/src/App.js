import './App.css';
import {Route} from 'react-router-dom';

import Nav from './components/nav/Nav.jsx'
import Cards from './components/cards/Cards.jsx';
import About from './components/about/About.jsx';
import City from './components/city/City.jsx';


function App() {
  return (
    <div className="App">

      <Nav/>
      <Route exact path='/' component={Cards}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/city/:name' component={City}/>

    </div>
  );
}

export default App;


