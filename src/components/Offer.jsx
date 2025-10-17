import React from 'react'
import girl6 from '../assets/girl10.jpg'
import { motion } from 'framer-motion'
const Offer = () => {
  return (
    <motion.div
      initial={{opacity:0,y:200}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1.5,ease:"easeOut"}} 
    className='w-[100%] md:h-[100vh] h-[60vh]  mt-[50px]'>
        <h1 className='text-center font-bold text-blue-700 md:text-[35px] text-[24px] '>exclusive offer</h1>
              <div className='md:w-[80%] w-[100%] mx-auto md:h-[60vh] h-[50vh] shadow-lg shadow-gray-400 flex mt-[100px]'>
                <div className='md:w-[70%] w-[50%] md:h-[100%]   bg-blue-600 rounded-tr-full py-[130px] md:px-[40px] px-[5px] '>
                      <h1 className='md:text-[40px] text-[21px] text-white font-bold mt-[10px]'> Mega Festive Sale 🎉</h1>
                      <p className='md:text-[25px] text-[17px] font-semibold text-white mt-[10px]'>Up to 60% OFF on latest fashion trends. Limited Time Only!</p>
                      <button className='bg-black border-black  text-white px-[20px] py-[6px] text-[17px] font-semibold rounded-lg hover:bg-transparent hover:text-white transition-all duration-200 ml-[7%] mt-[20px]'>check out</button>  
                </div> 
                <div className='md:w-[30%] w-[50%] h-[100%]  pr-[5px]'>
                   <img className='w-full h-full object-cover' src={girl6} alt="" />
                </div>
              </div>
    </motion.div>
  )
}

export default Offer