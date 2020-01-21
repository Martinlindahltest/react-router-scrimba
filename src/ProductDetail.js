import React from 'react'
import {
    //   Switch,
    //   Route,
    //Link,
    useParams
} from "react-router-dom";
import ProductsData from './ProductsData';


export default function ProductDetail() {

    let { paramId } = useParams()
    paramId = Number(paramId)

    const thisService = ProductsData.find(projectObject => projectObject.id === paramId)

    //const {serviceId} = useParams()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    //const thisService = servicesData.find(service => service._id === serviceId)


    console.log('thisService', thisService)

    const { id, name, description, price } = thisService


    return (
        <div>
            <div>pruduktdetalj id:{id}</div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}