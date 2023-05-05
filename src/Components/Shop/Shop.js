import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Order from '../Order/Order';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step-1 : get Id from shopping cart
        for (const id in storedCart) {

            // step-2 : find the product using id
            const addedCart = products.find(product => product.id === id);

            if (addedCart) {

                // step-3 : set quantity
                const quantity = storedCart[id];

                // console.log(quantity);

                addedCart.quantity = quantity;

                // console.log(addedCart);

                // step-4 : stored in savedCart
                savedCart.push(addedCart);

            }

        }
        // step-5 : added to cart from local storage
        setCarts(savedCart);
    }, [products])

    const [carts, setCarts] = useState([]);

    const handleCart = (product) => {
        // console.log(product.name, "added to the cart");

        const newCart = [...carts, product];
        setCarts(newCart);
        addToDb(product.id)
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
                    cart={carts}
                ></Order>
            </div>
        </div>
    );
};

export default Shop;