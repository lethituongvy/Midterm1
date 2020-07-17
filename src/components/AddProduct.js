import React, { Component } from 'react';

class AddProduct extends Component {
    onAddProduct(event) {
        event.preventDefault();
        let name = event.target["name"].value;
        let image = event.target["image"].files.item(0).name;
        let typeroom = event.target["typeroom"].value
        let number = event.target["number"].value
        let area = event.target["area"].value
        let price = event.target["price"].value
        let oldprice = event.target["oldprice"].value

        let product = {
            name: name,
            image: image,
            typeroom: typeroom,
            number: number,
            area: area,
            price: price,
            oldprice: oldprice
        }
        let products = JSON.parse(localStorage.getItem('lsc-product'));
        if (!products) {
            products = [];
        }
        products.push(product);
        localStorage.setItem("lsc-product", JSON.stringify(products));
        console.log(products);

    }
    render() {
        return (
            <div class="container">
                <form onSubmit={this.onAddProduct}>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input type="file" class="form-control" name="image" />
                    </div>
                    <div class="form-group">
                        <label>TypeRoom</label>
                        <input type="text" class="form-control" name="typeroom" placeholder="Enter typeroom" />
                    </div>
                    <div class="form-group">
                        <label>Number</label>
                        <input type="text" class="form-control" name="number" placeholder="Enter number" />
                    </div>
                    <div class="form-group">
                        <label>Area</label>
                        <input type="text" class="form-control" name="area" placeholder="Enter area" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Price</label>
                        <input type="text" class="form-control" name="price" placeholder="Enter price" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">OldPrice</label>
                        <input type="text" class="form-control" name="oldprice" placeholder="Enter oldprice" />
                    </div>
                    <button className="btn btn-success"> ADD </button>
                </form>
            </div>
        )
    }
}
export default AddProduct;