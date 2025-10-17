import React, { useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Collection from './components/Collection'
import Contact from './components/Contact'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Login from './components/Login'
import ProductDetail from './components/ProductDetail'
import { useDispatch, useSelector } from 'react-redux'
import { data } from './components/Data.js'
import {addProduct} from './redux/product.js'
import Orders from './components/Orders.jsx'
import { ToastContainer } from 'react-toastify'
import Address from './components/Address.jsx'
const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(addProduct(data))
  },[data])
  const {product}=useSelector((state)=>state.product)
  console.log(product)
  return (
    <div className=''>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/productdetail/:productId' element={<ProductDetail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/order' element={<Orders/>}/>
          <Route path='/address' element={<Address/>}/>
        </Routes>
          <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  )
}

export default App