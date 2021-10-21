import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container p-5">
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" exact component={ProductDetail} />
            <Route>404 Not Found!</Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
