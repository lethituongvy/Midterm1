import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Products from './components/Products';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: "products"

    }
    this.onProductCLick = this.onProductCLick.bind(this);
    this.onAddProductCLick = this.onAddProductCLick.bind(this);
  }

  onProductCLick() {
    this.setState({
      menu: "products"
    })
  }

  onAddProductCLick() {
    this.setState({
      menu: "add-product"
    })
  }

  render() {
    return (
      <div>
        <div className="Menu">
          <button className="btn btn-success" onClick={this.onProductCLick}>Product</button>
          <button className="btn btn-danger" onClick={this.onAddProductCLick}>Add Product</button>
          <hr />
        </div>
        {this.state.menu === "products" ? <Products /> : null}
        {this.state.menu === "add-product" ? <AddProduct /> : null}
        <hr />
      </div>
    )
  }
}

export default App;