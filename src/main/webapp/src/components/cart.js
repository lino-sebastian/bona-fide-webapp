import React from 'react'
import CartDisplay from './cartDisplay';

function Cart({ cart, removeCartItem }) {
    return (
        <>
            <div className="main_content">
                {
                    cart.map(item => {
                        return <CartDisplay key={item.cartId} item={item} removeCartItem={removeCartItem} />
                    })
                }
            </div>
        </>
    )
}
export default Cart;