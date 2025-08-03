import React from 'react'
import Users from './Users'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate =  useNavigate() 
  return (
    <>
    <button onClick={() =>( navigate('/users' , { state: { fromHome: true } }))}>open users</button>
   
    </>
  )
}

export default Home