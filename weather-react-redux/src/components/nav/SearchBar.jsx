import { useState } from "react"


export default function SearchBar () {

    const [state, setState] = useState('')

    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input type="text" placeholder='city...' onChange={(e) => setState(e.target.value)}/>
            <input type="submit" value='search'/>
        </form>
    )
}