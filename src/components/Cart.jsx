import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './productCard';
import { useDispatch } from 'react-redux';
import {removeFromCart} from'../store/cart.js'
function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

 
  return (
    cart.map((product) =>
      <ProductCard
        product={product}
        key={product.id}
        onAction={() => dispatch(removeFromCart(product))}
        actionLabel="remove from cart" />)
  )
}

export default Cart