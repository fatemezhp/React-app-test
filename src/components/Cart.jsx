import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './productCard';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from "../store/cart.js"; 

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  
  const handleAction = (actionType, data) => {
    if (actionType === "increment") {
      dispatch(incrementQuantity({ id: data }));
    } else if (actionType === "decrement") {
      dispatch(decrementQuantity({ id: data }));
    } else if (actionType === "remove") {
      dispatch(removeFromCart({ id: data }));
    }
  };
 
  return (
    <div className="cartWrapper">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cartSection">
          {cart.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAction={handleAction}
              actionLabel="" // Not used in cart since quantity controls are shown
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Cart