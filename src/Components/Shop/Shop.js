import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Order from '../Order/Order';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const [carts, setCarts] = useState([]);

    const handleCart = (product) => {
        // console.log(product.name, "added to the cart");
        
        const newCart = [...carts, product];
        setCarts(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}
                        handleCart={handleCart}
                    ></Product>)
                }
            </div>

            <div className="cart-container">
                <Order 
                cart = {carts}
                ></Order>
            </div>
        </div>
    );
};

export default Shop;