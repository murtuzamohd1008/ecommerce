import React from 'react'
import { motion } from 'framer-motion'
const Subscribe = () => {
  return (
    <motion.div
      initial={{opacity:0,y:200}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1.5,ease:"easeOut"}} 
    className='w-[100%] h-[40vh] mb-[100px] '>
        <div className='w-[95%] h-[100%] mx-auto md:w-[80%] shadow-lg shadow-gray-400 py-[50px] md:py-0'>
            <div className='text-center'>
                 <h1 className='text-center md:text-[35px] text-[24px] font-bold text-blue-700'>Subscribe Us</h1>
              <p className='md:w-[50%] sm:w-[75%] w-[90%] mx-auto text-gray-400 text-[17px]'>get 60% off after subscribing our website and you will get notification on every discount and offer so go ahead</p>
            </div>
          
                <form action="" className='md:w-[60%] w-[92%] mx-auto flex justify-center items-center  mt-[60px] shadow-lg rounded-full shadow-gray-300'>
                    <input  className='w-[100%] h-[40px] px-[16px]  border-none outline-none border-red-600 rounded-tl-full  rounded-bl-full' type="text" placeholder='subscribe now...' />
                    <button className=' rounded-tr-full h-[40px] border-2 px-[10px] font-bold  rounded-br-full border-red-500 bg-red-500 text-white'>subscribe</button>
                </form>
            
        </div>

    </motion.div>
  )
}

export default Subscribe