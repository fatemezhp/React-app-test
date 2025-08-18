import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './productCard';
function Cart() {
  const cart = useSelector((state) => state.cart);
  
  return (
    cart.map((product) => <ProductCard product={product}/>)
  )
}

export default Cart