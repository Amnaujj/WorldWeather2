import { useSelector } from "react-redux";
import Card from "../card/Card";


export default function Cards () {

    const state = useSelector((state) => state.cities)

    return (
        <div>
            {state.map((city) => 
                <Card
                    key={city.id}
                    id={city.id}
                    max={city.max}
                    min={city.min}
                    name={city.name}
                    img={city.img}
                    // onClose={() => onClose(city.id)}
                />
            )}
        </div>
    )
}