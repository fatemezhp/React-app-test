import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './products.css'
import ProductCard from './productCard'
function Product() {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
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
                            <ProductCard key={product.id} product={product}/>

                        ))}
                    </div>
                }
            </div>

  )
}

export default Product