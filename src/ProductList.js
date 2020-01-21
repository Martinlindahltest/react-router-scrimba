import React from 'react'
import {
    //   Switch,
    //   Route,
    Link
} from "react-router-dom";

export default function ProductList(props) {

    const { id, name } = props.data

    return (
        < Link to={`/products/${id}`
        }>
            <div key={id}>
                <p>{name}</p>
                <hr />
            </div>
        </Link >
    )
}
