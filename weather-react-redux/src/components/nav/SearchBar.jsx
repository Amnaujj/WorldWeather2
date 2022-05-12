import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCity } from '../../redux/actions/index.js'


export default function SearchBar () {

    const [state, setState] = useState('');

    const dispatch = useDispatch();

    return (
        <form onSubmit={(e) => {e.preventDefault(); dispatch(getCity(state))}}>
            <input type="text" placeholder='city...' onChange={(e) => setState(e.target.value)}/>
            <input type="submit" value='search'/>
        </form>
    )
}