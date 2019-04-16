import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CardProduct from "./components/CardProduct";
import CompareProduct from "./components/CompareProduct";

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        image:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Product 1",
        description: "something about...",
        price: 0,
        price_discount: 40000,
        is_compare: false
      },
      {
        id: 2,
        image:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Product 2",
        description: "something about...",
        price: 50000,
        price_discount: 40000,
        is_compare: false
      },
      {
        id: 3,
        image:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Product 3",
        description: "Something wrong...",
        price: 50000,
        price_discount: 30000,
        is_compare: false
      },
      {
        id: 4,
        image:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Product 2",
        description: "something about...",
        price: 50000,
        price_discount: 40000,
        is_compare: false
      },
      {
        id: 5,
        image:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Product 3",
        description: "Something wrong...",
        price: 50000,
        price_discount: 30000,
        is_compare: false
      },
      {
        id: 6,
        image:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Product 2",
        description: "something about...",
        price: 50000,
        price_discount: 40000,
        is_compare: false
      },
      {
        id: 7,
        image:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Product 3",
        description: "Something wrong...",
        price: 50000,
        price_discount: 30000,
        is_compare: false
      }
    ]
  };

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
                  onClickCompare={prod =>
                    this.setState({
                      products: products.map(p =>
                        p.id === prod.id
                          ? {
                              ...p,
                              is_compare: !p.is_compare
                            }
                          : p
                      )
                    })
                  }
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

export default App;
