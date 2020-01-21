import React from "react"
import ProductsData from './ProductsData'

function Products() {
    console.log(ProductsData)
    /** 
    id: 1,
        name: "Grumpy Cat Poster",
            description: "Everyone's favorite cat who loves to hate",
                price: 15
                */

    const jsxArray = ProductsData.map(obj => <div>{obj.name}</div>)

    return (
        <div>
            <h1>Products Page</h1>
            {jsxArray}
        </div>
    )
}

export default Products