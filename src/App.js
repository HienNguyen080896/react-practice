import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import CardProduct from "./components/CardProduct";
import CompareProduct from "./components/CompareProduct";
import CompareDetail from "./components/CompareDetail";
import ProductList from "./components/ProductList";

class App extends Component {

  render() {

    return (
      <Router>
        <Route path="/" exact component={ProductList} />
        <Route path="/compareDetail" exact component={CompareDetail} />
    </Router>
    );

  }
}

export default App;
