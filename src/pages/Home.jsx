import React from 'react'

import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate =  useNavigate() 
  return (
    <>
    <button onClick={() =>( navigate('/users' , { state: { fromHome: true } }))}>open users</button>
    <button onClick={() =>( navigate('/products' , { state: { fromHome: true } }))}>open products</button>

    </>
  )
}

export default Home