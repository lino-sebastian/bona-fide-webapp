import React from 'react';
import Product from './product';

function ProductList({ products, getCartItems }) {
    return (
        <>
            <div className="main_content">
                {
                    products.map(product => {
                        return <Product key={product.productId} product={product} getCartItems={getCartItems} />
                    })
                }
            </div>
            
        </>

    )
}
export default ProductList;