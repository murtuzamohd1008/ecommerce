import React from 'react'
import review1 from '../assets/review1.jpg'
import review2 from '../assets/review2.jpeg'
import review3 from '../assets/review3.jpg'
import review4 from '../assets/review4.jpeg'
import review5 from '../assets/review5.jpg'
import { motion } from 'framer-motion'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [review1, review2, review3, review4, review5];
const Review = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,
    autoplay:true,
     responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
    return (
        <motion.div
          initial={{opacity:0,y:150}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:1.5,ease:"easeOut"}}
         className='w-[70%] w- mx-auto  '>
            <h1 className='text-center font-bold md:text-[35px] text-[24px] text-blue-700 mb-[50px]'>Reviews</h1>
            <Slider {...settings}>
                   {
                    reviews.map((url)=><div className='h-[350px] shadow-md md:shadow-lg shadow-gray-300 transition-all duration-200 rounded-lg '>
                            <div className='w-[95%] mx-auto h-[150px] bg-blue-600 flex justify-center items-center rounded-lg'>
                                <img className='w-[70px] h-[70px] rounded-full object-bottom' src={url} alt="" />
                            </div>
                            <div className='flex justify-center flex-col'>
                                <p className='text-center font-semibold text-[12px] py-[10px]'>jhon</p>
                                <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At distinctio itaque illo </p>
                                <div className='flex justify-center mt-[20px]'>
                                     <button className='bg-blue-500 px-[8px] py-[6px] border-2 transition-all duration-200 border-blue-500 text-white hover:text-blue-600 font-semibold rounded-lg hover:bg-white mt-[24px]'>read more</button>
                                </div>
                                
                            </div>
                    </div>)
                   }
            </Slider>
        </motion.div>
    )
}

export default Review

//   {
//                         reviews.map((url)=><div>
//                             <div className='w-[100px] flex justify-center'>
//                                 <img className='w-[70px] mx-auto h-[70px] object-bottom' src={url} alt="" />
//                             </div>
//                             <div>
//                                 <p>jhon</p>
//                                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit quod laudantium reiciendis eum recusandae nobis.</p>
//                                 <button>read more</button>
//                             </div>
//                         </div>)
//                      }