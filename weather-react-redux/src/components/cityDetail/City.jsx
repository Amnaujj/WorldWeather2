import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { getCityDetail } from "../../redux/actions";

export default function CityDetail () {

    const dispatch = useDispatch();
    const {id} = useParams;

    useEffect(() => {
        console.log(id)
        dispatch(getCityDetail(id))
    },[dispatch,id])

    return (
        <div>

        </div>
    )
}