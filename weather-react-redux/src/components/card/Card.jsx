import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCity } from '../../redux/actions';




export default function Card (props) {

    const dispatch = useDispatch()

    const onClose = (e, id) => {
        e.preventDefault();
        dispatch(deleteCity(id));
    }
    
    return (
        <div>
            <button onClick={(e) => onClose(e, props.id)}> x </button>
            <Link to={`/city/${props.name}`}>
                <h2>{props.name}</h2>
            </Link>
            <div>
                <h3>min: {props.min}°</h3>
                <h3>max: {props.max}°</h3>
            </div>
        </div>
    )
}