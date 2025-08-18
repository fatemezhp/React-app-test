import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './productCard';
import { useDispatch } from 'react-redux';
import {removeFromCart } from'../store/cart.js'
function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  
  return (
    cart.map((product) =>
      <ProductCard
        product={product}
        onAction={() => dispatch(removeFromCart(product.id))}
        actionLabel="remove from cart" />)
  )
}

export default Cart