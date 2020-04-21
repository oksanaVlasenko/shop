import React from "react";
import { ProductList } from "Pages/ProductList";
import { ProductDetail } from "Pages/ProductDetails";
import { Basket } from "Pages/Basket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ProductList />
        </Route>
        <Route path="/details">
          <ProductDetail />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
