import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import {increaseQuantity,decreaseQuantity,deleteCart} from '../redux/cartSlise.js'
import empty from '../assets/empty.jpeg'
import { toast } from 'react-toastify';

import { contextData } from '../context/ContextApi.jsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const Orders = () => {
    const navigate=useNavigate()
    const {showForm,setShowForm}=useContext(contextData);
    const {cart,totalQuantity,totalPrice}=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
  return (
    <motion.div
      initial={{opacity:0,y:200}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1.5,ease:"easeOut"}}
     className='w-[100%] h-[100vh] bg-[#f9efef]'>
      <h1 className='text-center font-bold text-blue-700 text-[30px]  py-[100px]'>Orders Summary</h1>
      {
        cart.length===0?<div className='flex justify-center items-center mt-[150px]'><img src={empty} alt=''/></div>:
      
       <div className='w-[90%] mx-auto flex gap-[100px]'>
          <div className=" w-[60%] h-[600px] overflow-y-auto  py-[70px] flex flex-col gap-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
               {
                 cart?.map((item)=><div className=' w-[95%] mx-auto h-[100px]  border-b-[2px] pb-[15px] border-b-blue-400 flex justify-center items-center gap-[70px]'>
                    <div className='w-[100px] h-[80px]'>
                        <img className='w-full h-full object-contain rounded-lg' src={item?.img} alt="" />
                    </div>
                    <h1 className='w-[150px] font-semibold text-[18px]'>{item.name}</h1>
                    <p className='text-[18px] font-semibold'>&#8377;{item.totalPrice}</p>
                    <div className='flex justify-between items-center gap-[5px]'>
                        <button onClick={()=>dispatch(decreaseQuantity(item.id))} className='text-[18px] font-semibold bg-red-500 text-white px-[10px] rounded-full cursor-pointer'>-</button>
                        <span className='text-[18px] font-semibold'>{item.quantity}</span>
                        <button onClick={()=>dispatch(increaseQuantity(item.id))} className='text-[18px] font-semibold bg-green-500  text-white px-[8px] rounded-full cursor-pointer'>+</button>
                    </div>
                    <div onClick={()=>{
                        dispatch(deleteCart(item.id));
                        toast.success("product deleted successfully!")
                        }} className='text-[18px] font-semibold text-red-500 cursor-pointer'><button><MdDelete size={25} className='text-red-600 cursor-pointer'/></button></div>
                 </div>)
               }
          </div>
          <div className='w-[40%]'>
            <div className='w-[80%] h-[300px]  shadow-2xl bg-blue-400 rounded-lg shadow-gray-400   border-green-500 mt-[100px] px-[20px] py-[20px]'>
                <h1 className='text-blue-900 font-bold text-[20px]'>items summary:</h1>
               <div className='flex justify-between items-center mt-[30px]'>
                <h2 className='text-[20px] font-semibold text-blue-900'>total quantity:</h2>
                <h2 className='text-[20px] font-semibold text-black'>{totalQuantity}</h2>
               </div>
               <hr className='w-[100%] h-[2px] mt-[10px]' />
               <div className='flex justify-between items-center mt-[20px]'>
                <h2 className='text-[20px] font-semibold text-blue-900'>total price:</h2>
                <h2 className='text-[20px] font-semibold text-black' >&#8377;{totalPrice}</h2>
                
               </div>
                <hr className='w-[100%] h-[2px] mt-[10px]' />
                <div className='flex justify-center items-center mt-[36px]'>
                    <button className='bg-green-600 font-semibold text-white px-[30px] cursor-pointer py-[7px] rounded-lg shadow-lg shadow-green-400' onClick={()=>navigate('/address')}>place order</button>
                </div>
            </div>
          </div>
       </div>}
    </motion.div>
  )
}

export default Orders