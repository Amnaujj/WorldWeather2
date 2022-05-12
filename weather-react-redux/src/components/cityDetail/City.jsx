import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCityDetail } from "../../redux/actions";

export default function CityDetail () {

    const dispatch = useDispatch();

    const city = useSelector((state) => state)

    useEffect(() => {
        console.log(city)
        const id  = city.match.params.id
        dispatch(getCityDetail(id))
    },[dispatch,city])

    return (
        <div>

        </div>
    )
}