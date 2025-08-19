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
  const [isInCart, setIsInCart] = useState([])
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const addHandler = (product) => {
    dispatch(addToCart(product))
    const isincart = products.some((item) => item.id == product.id)
    if (isincart) {
      setIsInCart([...isInCart, product])
      console.log(isInCart);
    }
    else {}
  }

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

          {products.map((product) => {

            return (
              <ProductCard key={product.id}
                product={product}
                onAction={() => addHandler(product)}
                actionLabel={isInCart ? "Already in Cart" : "Add to Cart"} />
            )
          }
          )}
        </div>
      }
    </div>

  )
}

export default Product