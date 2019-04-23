import React, { Component } from "react";
import CardProduct from "./CardProduct";
import { findProductById } from "../services/ProductService";

class CompareDetail extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const ids = params.get('product').split(',');
    const products = [];
    ids.forEach(p => {
      const prod = findProductById(p);
      if (prod) {
        products.push(prod);
      }
    });
    this.setState({ products });
  }
z
  render() {
    const { products } = this.state;

    return (
      <div>
        {products.map(product => (
          <div key={product.name} className="col-3">
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    );
  }
}

export default CompareDetail;
