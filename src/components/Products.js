import React, { Component } from 'react';
import ProductItem from './ProductItem';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: JSON.parse(localStorage.getItem('lsc-product'))
        }
        if (!this.products) {
            this.products = [];
        }
        console.log(this.products);
    }
    onClickItem(item) {
        return () => {
            alert("Thank you your order ");
        }
    }
    render() {
        return (
            <div className="Products">
                {this.state.products.map((item, key) =>
                    <ProductItem
                        item={item}
                        key={key}
                        onItemClick={this.onClickItem(item)}
                    />
                )}
            </div>
        );
    }
}
export default Products;