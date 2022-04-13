import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Header({ cart }) {
    const [cartSizeStatus, setCartSizeStatus] = useState(false)
    const cartSize = cart.length;
    useEffect(() => {
        setCartSizeStatus(false)
        if (cartSize === 0) {
            setCartSizeStatus(true)
        }
    }, [cart])

    return (
        <nav>
            <div className="logo">BonaFide.</div>
            <ul>
                <Link className="route-link" to="products"><li>Home</li></Link>
                <Link className="route-link" to="/products"><li>Our Products</li></Link>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="search">
                <Link className="route-link" to="/cart"><i className="fa fa-shopping-basket"></i><label className="cart-label" hidden={cartSizeStatus}>{cartSize}</label></Link>
                <Link className="route-link" to="/logout"><i className="fa fa-power-off"></i></Link>
            </div>
        </nav>
    )
}
