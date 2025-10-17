import React from 'react'
import {data} from './Data.js'
import { FaStar } from 'react-icons/fa'
import {motion} from 'framer-motion'
import Card from './Card.jsx'
import { useSelector } from 'react-redux'
const OurTrendingProduct = () => {
  const {product}=useSelector((state)=>state.product)
  return (
    <div className='w-[100] min-h-[100vh] '>
        <motion.div
           initial={{opacity:0,y:200}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1.5,ease:"easeOut"}}
        >
            <h1 className='text-center  md:text-[35px] text-[24px] font-bold text-blue-500  md:mt-0'>Our Trending Products</h1>
            <div className='w-[95%] md:w-[80%] mx-auto flex justify-center flex-wrap gap-[20px] mt-[80px]'>
                {
                   product.slice(0,4).map((item)=>(<Card item={item}/>))
                }
            </div>
        </motion.div>
    </div>
  )
}

export default OurTrendingProduct