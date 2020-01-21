import React from "react"

import Home from "./Home"
import Products from "./Products"
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from "./ProductDetail";


function App() {
  return (
    <div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/">Home</Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:paramId">
            <ProductDetail />
          </Route>


        </Switch>
      </nav>
      {    /**
     * Challenge:
     * 
     * 1. Create a ProductDetail component
     * 2. Link each product name to a detail page of that product 
     *    under the route "/products/{insert product id here}" (e.g.: "/products/2")
     * 3. Clicking the product name should replace the product list page with
     *    the detail page of that component.
     * 
     * Hint: Check out the `useParams` lesson if you need a refresher.
     */}

    </div>
  )
}

export default App