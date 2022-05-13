import { Link } from 'react-router-dom'

import SearchBar from './SearchBar.jsx'


export default function Nav () {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>
                <h2>About</h2>
            </Link>
            <SearchBar/>
        </nav>
    )
}