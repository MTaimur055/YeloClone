import React, { Component } from "react";

import Products1 from "./Productsdata/Products1";
import Filter from "./Productsdata/Filter";




class Products extends Component {
  render() {
    return (
     
        <div className="container" style={{marginLeft:'60px'}}>
          <h1>Products</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products1 />
            </div>
            <div className="col-md-3">
             
             
            </div>
          </div>
        </div>
    
    );
  }
}

export default Products;
