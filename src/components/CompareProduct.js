import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./CompareProduct.css";
import CardProduct from "./CardProduct";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CompareProduct extends Component {
  state = {
    isCollapse: false
  };
  

  render() {
    const { productCompare } = this.props;
    toast.configure();
    return (
      <div className="row compare-product">
        <div className="col-12 d-flex justify-content-end">
          <i
            className="material-icons"
            onClick={() =>
              this.setState({ isCollapse: !this.state.isCollapse })
            }
            style={{ cursor: "pointer" }}
          >
            {this.state.isCollapse
              ? "keyboard_arrow_up"
              : "keyboard_arrow_down"}
          </i>
        </div>

        {
          productCompare.length < 4 ? (!this.state.isCollapse && productCompare.map(product => (
            <div key={product.name} className="col-3">
             <CardProduct product={product}/>
            </div>
            ))) : toast("Please, compare maximum 3 product !")
        }

        { productCompare.length && (
          <div className="col-12">
            <button className="btn-compare-detail">
              <Link
                to={{
                  pathname: "/compareDetail",
                  search: `?product=${productCompare.map(p => p.id).join(",")}`
                }}
                className="nav-link"
              >
                compare product
              </Link>
            </button>
          </div>
        ) }
      </div>
    );
  }
}

export default CompareProduct;
