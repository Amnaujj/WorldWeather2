import { useSelector } from "react-redux";
import Card from "../card/Card";


export default function Cards () {

    const cities = useSelector((state) => state.citiesLoaded);
    
    

    return (
        <div>
            {/* {console.log(cities)} */}
            {cities && cities?.map((city) => 
                <Card
                    key={city.id}
                    id={city.id}
                    max={city.max}
                    min={city.min}
                    name={city.name}
                    img={city.img}
                />
            )}
        </div>
    )
}