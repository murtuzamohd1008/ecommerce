import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Navigate, useNavigate } from 'react-router-dom';
const HeroSection = ({images}) => {
  const navigate=useNavigate();
const [current,setCurrent]=useState(0);
const imgWidth=400;
useEffect(()=>{
    const interval=setInterval(()=>{
            setCurrent((prev)=>(prev+1)%images.length)
    },1000)
      return () => clearInterval(interval) // cleanup to prevent duplicates
},[images.length])
  
  return (
    <div className='w-[100%] h-[40vh] md:h-[100vh] md:py-[45px] mt-0 bg-white  '>
     <div className='md:w-[80%] w-[98%] h-[100%] md:h-[80%]  mx-auto flex shadow-lg shadow-gray-300 rounded-2xl'>
         <div className='w-[50%]  bg-yellow-400 rounded-tl-2xl rounded-bl-2xl md:py-[150px] py-[50px] md:px-[30px] px-[4px] '>
              <h1 className='md:text-[45px] sm:text-[30px] text-[20px] font-bold text-blue-600 md:leading-11'>Discover the Latest Trends</h1>
              <h2 className='md:text-[24px] sm:text-[20px] text-[15px] font-semibold  text-blue-600 mt-[20px]'>Upgrade your wardrobe with our exclusive new arrivals for men and women</h2>
              <button onClick={()=>navigate('/collection')} className='bg-blue-700 cursor-pointer text-[14px] md:text-[16px] px-[4px] py-[5px] md:px-[16px] md:py-[8px] mt-[30px] ml-[10px] md:ml-[30px] text-white mg:font-semibold rounded-lg shadow-lg shadow-gray-400 transition-all duration-300 ease-in-out border-2 border-blue-700 hover:bg-transparent hover:text-blue-700'>View Collection</button>
         </div>
          <img className='w-[50%] h-full object-cover rounded-tr-2xl rounded-br-2xl' src={images[current]} alt="" />
          </div>
    </div>
  )
}

export default HeroSection