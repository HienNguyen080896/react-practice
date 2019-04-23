import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import CardProduct from "./CardProduct";
import CompareProduct from "./CompareProduct";
import { getProducts } from "../services/ProductService";
import { toast } from "react-toastify";

class ProductList extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({ products: getProducts() });
  }

  render() {
    const { products } = this.state;

    const productCompare = products.filter(product => product.is_compare);

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            {products.map(product => (
              <div className="col-3">
                <CardProduct
                  onClickCompare={prod => {
                    if (!prod.is_compare && productCompare.length === 3) {
                      toast("Tối đa 3 sản phẩm!");
                      return;
                    }

                    this.setState({
                      products: products.map(p =>
                        p.id === prod.id
                          ? {
                              ...p,
                              is_compare: !p.is_compare
                            }
                          : p
                      )
                    });

                  }}
                  product={product}
                />
              </div>
            ))}
          </div>

          <CompareProduct productCompare={productCompare} />
        </div>
      </div>
    );
  }
}

export default ProductList;
