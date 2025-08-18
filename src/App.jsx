import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Users from './pages/Users'
import Products from './components/Products'
import Cart from './components/Cart'

function App() {


  return (


    <div className="container">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<Users />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={ <Cart />} />
        </Routes>
      </Layout>
    </div>

  )
}

export default App
