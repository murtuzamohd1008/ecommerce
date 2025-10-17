import React from 'react'
import HeroSection from './HeroSection'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'
import OurTrendingProduct from './OurTrendingProduct'
import LatestCillection from './LatestCillection'
import Offer from './Offer'
import Subscribe from './Subscribe'
import Review from './Review'
import Footer from './Footer'

const Home = () => {
    const images=[hero1,hero2,hero3,hero4,hero5];
  return (
    <div className='w-[100%] min-h-[100vh] py-[100px]'>
        <div className='flex flex-col gap-[100px]'>
            <HeroSection images={images}/>
            <div className=''>
                  <OurTrendingProduct/>
            </div>
           
            <LatestCillection/>
            <Offer/>
            <Subscribe/>
            <Review/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home