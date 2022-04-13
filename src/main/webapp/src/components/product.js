import React from 'react';

function Product({ product, getCartItems }) {
    function addToCart() {
        getCartItems(product.productId)
    }
    return (
            <div className="card" key={product.productId}>
                <div className="card_img">
                    <img src={product.productImgThumb}/>
                </div>
                <div className="card_header">
                    <h2>{product.productName}</h2>
                    <p>{product.productDescription}</p>
                    <p className="price">{product.productPrice}<span>{product.currency}</span></p>
                    <div className="btn" onClick={addToCart}>Add to cart</div>
                </div>
            </div>

    )

}
export default Product;