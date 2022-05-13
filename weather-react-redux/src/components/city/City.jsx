import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { CityDetail } from "../../redux/actions";

export default function City (props) {

    const dispatch = useDispatch();
    const { name } = useParams();
    const details = useSelector((state) => state.city);
    
    useEffect(() => {
        dispatch(CityDetail(name))
    },[dispatch, name])


    if(details !== undefined){
        return (
            <div>
                {console.log(details)}
                
                <h1>{details.name}</h1>
                <ul>
                    <li>temp min {details.min}</li>
                    <li>temp max {details.max}</li>
                    <li>weather {details.weather}</li>
                    <li>clouds {details.clouds}</li>
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <h1>LOADING...</h1>
            </div>
        )
    }
}