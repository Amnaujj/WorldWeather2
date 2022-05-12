import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCity } from '../../redux/actions';




export default function Card (props) {

    const dispatch = useDispatch()
    
    return (
        <div>
            <button onClick={() => dispatch(deleteCity(props.id))}> x </button>
            <Link to={`/city/${props.id}`}>
                <h2>{props.name}</h2>
            </Link>
            <div>
                <h3>min: {props.min}</h3>
                <h3>max: {props.max}</h3>
            </div>
        </div>
    )
}