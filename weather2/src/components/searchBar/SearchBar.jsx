import React from "react";
import { connect } from "react-redux";
import { getCity } from "../../redux/actions/Actions";

class SearchBar extends React.Component {

    constructor(props){
        super(props)

        this.state = ''
    }

    setState = (e) => {
        return this.state = e.target.value
    }

    ciudad = () => {
        this.props.getCity()
    }

    render(){
        return (
            <form onSubmit={(e)=>{e.preventDefault(); this.ciudad(this.state)}}>
                <input type='text' value={this.state} onChange={(e) => this.setState(e)}/>
                <input type='submit' value='search...'/>
            </form>
        )
    }
}


export default connect ({getCity})(SearchBar)