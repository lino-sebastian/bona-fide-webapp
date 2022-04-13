import React from 'react'

function CartDisplay({ item, removeCartItem }) {
    function removeFromCart() {
        removeCartItem(item.cartId)
    }

    return (
        <div className="card" key={item.cartId}>
            <div className="card_img">
                <img src={item.image} />
            </div>
            <div className="card_header">
                <h2>{item.name}</h2>
                <p className="price">{item.price}<span>$</span></p>
                <div className="btn" onClick={removeFromCart}>Remove</div>
            </div>
        </div>
    )

}
export default CartDisplay;