import React from 'react'
import './products.css'
import { useSelector } from 'react-redux';
function ProductCard({ product, onAction, actionLabel }) {
    const cart = useSelector((state) => state.cart);
    const cartItem = cart.find((item) => item.id === product.id);
    const isInCart = !!cartItem;
    const quantity = cartItem ? cartItem.quantity : 0;
    return (
        <>
            <div className='productCard' key={product.id}>
                <div className='pImgHolder'> <img className='pImg' src={product.image} alt={product.name} /></div>
                <div className='caption'>
                    <div><p>{product.title}</p>
                        <h3>{product.price} t</h3>
                    </div>
                    {isInCart ? (
                        <div className="quantityControls">
                            <button onClick={() => onAction("decrement", product.id)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => onAction("increment", product.id)}>+</button>
                            <button onClick={() => onAction("remove", product.id)}>Remove</button>
                        </div>
                    ) : (
                        <button onClick={() => onAction("add", product)}>{actionLabel}</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductCard