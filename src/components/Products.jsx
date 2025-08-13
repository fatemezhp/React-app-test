import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './products.css'
import ProductCard from './productCard'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cart'
function Product() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const disPatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = (product) => {
    console.log(product);
    disPatch(addToCart(product))
  } 

  const getProdcts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data);
      setLoading(false)

    } catch (error) {
      console.log('product api error', error);
    }

  }
  useEffect(() => {

    getProdcts();

  }, [])



  return (
    <div className="wrapper">
      <button onClick={() => (navigate(-1))}>close products</button>
      {loading
        ? <div className=''>
          <span>
            LOADING
          </span>
        </div>
        : <div className='productsSction'>
          {products.map((product) => (
            <ProductCard key={product.id}
             product={product}
             addToCart={() => addToCartHandler(product)} />

          ))}
        </div>
      }
    </div>

  )
}

export default Product