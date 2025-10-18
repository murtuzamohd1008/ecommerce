import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa';
import { addCart } from '../redux/cartSlise';
import { toast } from 'react-toastify';
const ProductDetail = () => {
  const {productId}=useParams();
 const navigate=useNavigate();
  const {product}=useSelector((state)=>state.product);
  const [selectedproduct,setSelectedProduct]=useState({});
   const dispatch=useDispatch();
  const getProductDeatil=()=>{
       let getProduct=product.find((item)=>item.id===parseInt(productId));
       console.log(getProduct)
       setSelectedProduct(getProduct)
  }
  useEffect(()=>{
    getProductDeatil()
  },[productId,product])
  return (
    <div className='w-[100%] min-h-[100vh] bg-[#f9f2f2] py-[100px] pb-[200px] md:pb-0 '>
      <h1 className='text-center font-bold text-blue-700 text-[30px] mb-[30px]'>product datails</h1>
          <div className='md:w-[80%] w-[100%]  mx-auto bg-white gap-[30px] md:gap-0 flex py-[50px] flex-col md:flex-row'>
            <div className='md:w-[50%] w-[100%]'>
                 <img className='md:w-[70%] w-[95%] h-[300px]  md:h-[75%] object-fill mx-auto rounded-lg shadow-lg shadow-gray-400' src={selectedproduct?.img} alt="" />
            </div>
            <div className='md:w-[30%] w-[90%] mx-auto'>
                <h1 className='text-[26px] font-semibold text-black'>{selectedproduct.name}</h1>
                <h2 className='text-[17px] mt-[20px]'>{selectedproduct.description}Experience the perfect blend of comfort, style, and quality . Crafted from soft, breathable, and durable</h2>
                <div className='flex mt-[20px] text-yellow-300'>
                  <FaStar size={23}/>
                    <FaStar size={23}/>
                      <FaStar size={23}/>
                        <FaStar size={23}/>
                          <FaStar size={23}/>
                </div>
                <p className='text-[20px] font-bold mt-[14px]'>&#8377;{selectedproduct.price}</p>
                <div className='flex flex-col gap-[23px] mt-[14px]'>
                  <h3 className='font-semibold text-[20px]'>Sizes</h3>
                  <div className='flex gap-[10px]'>
                    <button className='border-[1px] bg-green-500 text-white font-semibold w-[45px] h-[45px] border-white shadow-lg shadow-gray-400 rounded-lg cursor-pointer'>S</button>
                     <button  className='border-[1px] bg-green-500 text-white font-semibold w-[45px] h-[45px] border-white shadow-lg shadow-gray-400 rounded-lg cursor-pointer'>M</button>
                      <button  className='border-[1px] bg-green-500 text-white font-semibold w-[45px] h-[45px] border-white shadow-lg shadow-gray-400 rounded-lg cursor-pointer'>L</button>
                       <button  className='border-[1px] bg-green-500 text-white font-semibold w-[45px] h-[45px] border-white shadow-lg shadow-gray-400 rounded-lg cursor-pointer'>XL</button>
                  </div>
                </div>
                <div className='mt-[28px]'>
                  <button className='bg-green-500 cursor-pointer text-white font-semibold px-[28px] py-[7px] rounded-lg shadow-lg shadow-gray-400' onClick={()=>{
                    dispatch(addCart(selectedproduct));
                    toast.success("product added successfully!");
                    navigate('/collection')
                  }}>add to cart</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default ProductDetail