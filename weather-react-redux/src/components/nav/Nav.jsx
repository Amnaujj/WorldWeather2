import './Nav.css';
import logo from '../../img/aaa.jpg'

import { Link } from 'react-router-dom'

import SearchBar from './SearchBar.jsx'


export default function Nav () {

    return (
        <nav className='Nav'>
            <Link to='/'>
                <img className='logo' src={logo} alt='img'/>
            </Link>
            <Link to='/about'>
                <h2 className='about'>About</h2>
            </Link>
            <div className='searchBar'>
                <SearchBar/>
            </div>
        </nav>
    )
}