import React from "react";
import SearchBar from '../searchBar/SearchBar.jsx'

class Nav extends React.Component {
    
    constructor () {
        super()        
    }

    render(){
        return(
            <div>
                <SearchBar/>
            </div>
        )
    }
}