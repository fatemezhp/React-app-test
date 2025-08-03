import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
function Product() {
    const [products,setProducts] = useState([])
    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])

    const getProducts = () => {
        axios.get()
    }
    
  return (
    <div>Product</div>
  )
}

export default Product