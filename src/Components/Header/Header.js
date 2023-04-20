import React from 'react';
import icon from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={icon} alt="" />

            <div>
                <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/management">Management Inventory</a>
                <a href="/login">Log In</a>
            </div>
        </div>
    );
};

export default Header;