import React from "react";
import { useSelector } from "react-redux";

export default function Card (props) {

    

    return (
        <div>
            <button> x </button>
            <h2>{props.name}</h2>
            <div>
                <h3>{props.min}</h3>
                <h3>{props.max}</h3>
            </div>
        </div>
    )
}