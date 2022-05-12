import { useDispatch } from "react-redux";
import { deleteCity } from '../../redux/actions';




export default function Card (props) {

    const dispatch = useDispatch()
    
    return (
        <div>
            <button onClick={() => dispatch(deleteCity(props.id))}> x </button>
            <h2>{props.name}</h2>
            <div>
                <h3>min: {props.min}</h3>
                <h3>max: {props.max}</h3>
            </div>
        </div>
    )
}