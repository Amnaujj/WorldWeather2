import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card.jsx";

export default function Cards() {

    const cities = useSelector((state)=>state.Cities);

    return(
        <div>
            {
                cities?.map((city) => 
                    <Card
                        id = {city.id}
                        name = {city.name}
                        min = {city.min}
                        max = {city.max}
                    />
                )
            }
        </div>
    )
}