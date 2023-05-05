import React from 'react';
import './Order.css';

const Order = ({ cart }) => {

    // console.log(cart)
    let total = 0;
    let shipping = 0;
    for (const p of cart) {
        // console.log(p.price);
        total += p.price;
        shipping += p.shipping;
    }

    const tax_num = total * 0.07;
    const tax = tax_num.toFixed(2);

    const grand = total + shipping + tax;

    return (
        <div className='cart'>
            <h1>Order Summary </h1>
            <p> Selected Items : {cart.length}</p>
            <p>Product Price : $ {total} </p>
            <p>Total Shipping : {shipping} </p>
            <p>Tax :  {tax} </p>
            <h4>Grand Total Price : {grand} </h4>
        </div>
    );
};

export default Order;