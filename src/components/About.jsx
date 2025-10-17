import React from 'react'
import about from '../assets/girl1.avif'
const About = () => {
  return (
    <div className='w-[100%] py-[160px] bg-gray-800 text-white'>
      <h1 className='text-center font-bold text-4xl text-purple-600'>about us page</h1>
      <div className='w-[100%] md:w-[72%] mx-auto flex-col md:flex-row flex justify-center  items-center mt-[100px] shadow-lg shadow-gray-900  p-[20px] rounded-lg gap-[100px] md:gap-0'>
        <div className='w-[100%] md:w-[40%] h-[320px]'>
          <img className='w-[100%] md:w-[80%] h-[100%] bg-white rounded-lg' src={about} alt="" />
        </div>
        <div className='md:w-[60%] w-[100%] flex justify-center items-center flex-col gap-[20px]'>
          <p className='bg-gray-700 p-[10px] rounded-md'>. Welcome to stylesphere, your trusted destination for high-quality products at affordable prices. Founded in 2023, our mission is to make online shopping simple, secure, and enjoyable for everyone. From fashion and electronics to everyday essentials, we carefully select products that bring value and convenience to your life.</p>
          <p className='bg-gray-700 p-[10px] rounded-md'>. At stylesphere, customer satisfaction is our top priority. We believe in providing an exceptional shopping experience, from browsing and ordering to delivery and returns. Our team works tirelessly to ensure fast shipping, easy returns, and responsive customer support, so you can shop with confidence every time.</p>
          <p className='bg-gray-700 p-[10px] rounded-md'> . Our vision is to become a leading e-commerce platform that people trust and love. We are committed to transparency, quality, and innovation, constantly improving our services and offerings to meet the evolving needs of our customers. At MyShop, we don’t just sell products—we build relationships and create a seamless shopping experience for everyone.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
      
        <div className="p-6 rounded-2xl bg-gradient-to-t from-pink-400 to-purple-500 text-white shadow-lg text-center hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">🌍</div>
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-white">To become a leading e-commerce platform that customers trust and love, offering innovative shopping experiences.</p>
        </div>

      
        <div className=" bg-gradient-to-t from-pink-400 to-purple-500 text-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
          <p className="text-white">Every item we sell is carefully curated and tested for quality to ensure you always get the best.</p>
        </div>

       
        <div className=" bg-gradient-to-t from-pink-400 to-purple-500 text-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold mb-2">Customer First</h3>
          <p className="text-white">We believe in building long-term relationships with our customers through trust, transparency, and support.</p>
        </div>
      </div>

    </div>
  )
}

export default About