import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);

    const {img, name, ratings,price,seller} = props.product;
    return (
        <div className='card'>
            <div className='card-img'>

            <img src={img} alt="" />

            </div>
            
            <div className='card-body'>
                <h3 className='product-name'>{name}</h3>
                <h4 className='product-rating'>Ratings : {ratings}</h4>
                <h3 className='product-price'> Price : ${price}</h3>
                 <h5 className='seller'>Manufacturer : {seller}</h5>
                <button className='product-btn' >Add To Cart</button>

            </div>
        </div>
    );
};

export default Product;

