import React, { Component } from "react";
import "./style.css";
import "./CardProduct.css";

class CardProduct extends Component {

  render() {
    const { product, onClickCompare } = this.props;
    return (
      <div className="card card-product">
        <img style={{ height: 300 }} src={product.image} />

        <div
          className="card-body"
          style={{ textAlign: "left", padding: 10, height: 238 }}>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <p style={{ color: "red" }}>Price: {product.price_discount}$</p>
          {product.price ? (
            <p style={{ textDecoration: "line-through" }}>
              {" "}
              Price: {product.price}$
            </p>
          ) : null}
          <button onClick={() => onClickCompare(product)} className="btn btn-primary btn-compare">Compare</button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
