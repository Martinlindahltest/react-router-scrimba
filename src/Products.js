import React from "react"
import ProductsData from './ProductsData'
import ProductList from "./ProductList"

function Products() {
    console.log(ProductsData)
    /**
     * Challenge:
     * 
     * 1. Create a ProductDetail component
     * 2. Link each product name to a detail page of that product 
     *    under the route "/products/{insert product id here}" (e.g.: "/products/2")
     * 3. Clicking the product name should replace the product list page with
     *    the detail page of that component.
     * 
     * Hint: Check out the `useParams` lesson if you need a refresher.
     */

    const jsxArray = ProductsData.map(data => <ProductList data={data} />)

    return (
        <div>
            <h1>Products Page</h1>
            {jsxArray}
        </div>
    )
}

export default Products