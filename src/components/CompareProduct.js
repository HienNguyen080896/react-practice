import React, { Component } from "react";
import "./CompareProduct.css";
import CardProduct from "./CardProduct";

class CompareProduct extends Component {
  state = {
    isCollapse: false
  };

  render() {
    const { productCompare } = this.props;
    return (
      <div className="row compare-product">
        <div className="col-12 d-flex justify-content-end">
          <i className="material-icons" onClick={() => this.setState({isCollapse: !this.state.isCollapse})} style={{ cursor: "pointer" }}>
            {this.state.isCollapse? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          </i>
        </div>

        {!this.state.isCollapse && productCompare.map(product => (
          <div key={product.name} className="col-3">
            <CardProduct product={product} />
            
          </div>
        ))}
      </div>
    );
  }
}

export default CompareProduct;
