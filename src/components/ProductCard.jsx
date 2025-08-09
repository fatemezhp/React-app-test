import React from 'react'
import './products.css'
function ProductCard({ product, addToCart }) {
    return (
        <>
            <div className='productCard' key={product.id}>
                <div className='pImgHolder'> <img className='pImg' src={product.image} alt={product.name} /></div>
                <div className='caption'>
                    <div><p>{product.title}</p>
                        <h3>{product.price} t</h3></div>
                    <button onClick={addToCart}>add to cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard