



export default function (props) {

    
    return (
        <div>
            <button> x </button>
            <h2>{props.name}</h2>
            <div>
                <h3>min: {props.min}</h3>
                <h3>max: {props.max}</h3>
            </div>
            <img src={props.img} alt="" />
        </div>
    )
}