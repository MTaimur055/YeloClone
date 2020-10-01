import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "./productActions";
class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.filteredProducts.length} products found.`}</div>
        <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
            {" "}
            Categories
            <select
              className="form-control"
              value={this.props.size}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">ALL</option>
              <option value="x">Fruits</option>
              <option value="s">Vegetables</option>
              <option value="m">Meat</option>
              <option value="l">Bakery</option>
              <option value="xl">Deserts</option>
              <option value="xxl">Soap and Shampoo</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);
