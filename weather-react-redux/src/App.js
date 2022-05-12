import './App.css';
import {Route} from 'react-router-dom';

import Nav from './components/nav/Nav.jsx'
import Cards from './components/cards/Cards.jsx';
import About from './components/about/About.jsx';
import CityDetail from './components/cityDetail/City.jsx';


function App() {
  return (
    <div className="App">

      <Nav/>
      <Route exact path='/' component={Cards}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/city/:id' component={CityDetail}/>

    </div>
  );
}

export default App;


