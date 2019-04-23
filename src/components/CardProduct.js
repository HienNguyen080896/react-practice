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
          style={{ textAlign: "left", padding: 10, height: 150 }}>
          <h6 className="card-title">{product.name}</h6>
          <div className="card-text">{product.description}</div>
          <div className="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <div style={{ color: "red" }}>Price: {product.price_discount}$</div>
          {product.price ? (
            <div style={{ textDecoration: "line-through" }}>
              {" "}
              Price: {product.price}$
            </div>
          ) : null}
          
          <div class="overlay"></div>
          
          <button
            onClick={() => onClickCompare && onClickCompare(product)}
            className="btn btn-primary btn-compare button">
             {product.is_compare ? "Remove" : "Compare"}
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
