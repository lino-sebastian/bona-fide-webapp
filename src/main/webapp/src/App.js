import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import axios from 'axios';
import ProductList from './components/productList'
import Header from './components/header';
import Footer from './components/footer';
import Cart from './components/cart';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logout from './components/logout';

function App() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productListingUrl = '/bona-fide-service/api/products'
            const authToken = 'Bearer ' + localStorage.getItem('token');
            const headers = {
                'Authorization': authToken,
                "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "*"
            };
            await axios.get(productListingUrl, { headers })
                .then(response => {
                    setProducts(response.data);
                })
                .catch(error => {
                    console.log(error)
                    window.location = "/bona-fide-user-webapp/"
                })
        };
        fetchData();
    }, []);

    function getCartItems(id) {
        const cartProduct = products.find(product => product.productId === id)
        setCart(prevCart => {
            return [...prevCart, { cartId: cartProduct.productId, name: cartProduct.productName, price: cartProduct.productPrice, image: cartProduct.productImgThumb }]
        })
    }

    function removeCartItem(id) {
        const updatedCart = cart.filter(cartItem => id !== cartItem.cartId)
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    return (
        <Router>
            <div className="container">
                <Header cart={cart} />
                <Routes>
                    <Route exact path='/bona-fide-webapp' element={<ProductList products={products} getCartItems={getCartItems} />} />
                    <Route path="/cart" element={<Cart cart={cart} removeCartItem={removeCartItem} />} />
                    <Route path="/logout" element={<Logout clearCart={clearCart} />} />
                    <Route path="/products" element={<ProductList products={products} getCartItems={getCartItems} />} />
                </Routes>
                <Footer />
            </div>
        </Router>

    );
}

export default App;

