import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import './Product.css';
class ProductItem extends Component {
    render() {
        return (
            <div className="show">
                <div><img src={"Image/" + this.props.item.image} width="200px" height="200px" name="image" /></div>
                <h3>PHÒNG {this.props.item.typeroom}</h3><hr />
                <h6>CHỖ NGHỈ {this.props.item.number}</h6><hr />
                <h6>KÍCH THƯỚC {this.props.item.area}</h6><hr />
                <h6>GIÁ PHÒNG<CurrencyFormat className="formatmoney" thousandSeparator={true} value={this.props.item.price} />vnđ</h6><hr />
                <button className="btn btn-warning" onClick={this.props.onItemClick}>Đặt Phòng</button>
            </div>
        )
    } 
}
export default ProductItem;