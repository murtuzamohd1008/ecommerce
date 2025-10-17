import React from 'react'
import {data} from './Data.js'
import Card from './Card.jsx'
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'
const LatestCillection = () => {
  const {product}=useSelector((state)=>state.product);
  return (
    <motion.div
      initial={{opacity:0,y:200}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1,ease:"easeOut"}}
     className='w-[100%] min-h-[100vh] pt-[100px] md:pt-0'>
        <h1 className='text-center md:text-[35px] text-[24px] font-bold text-blue-700'>Latest Collection</h1>
        <div className='w-[95%] md:w-[80%] mx-auto flex justify-center gap-[20px] flex-wrap mt-[100px]'>
               {
                  product.slice(4,12).map((item)=>(<Card item={item}/>))
               }
        </div>
    </motion.div>
  )
}

export default LatestCillection