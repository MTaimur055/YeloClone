import React, { Component } from "react";
import { Provider } from "react-redux";
import Products1 from "./Productsdata/Products1";
import Filter from "./Productsdata/Filter";
import Basket from "./Productsdata/Basket";
import store from "./Productsdata/store";



class Products extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Products</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products1 />
            </div>
            <div className="col-md-3">
              <Basket />
             
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default Products;
