import React from 'react'
import logo from '../assets/logo.jpeg'
const Footer = () => {
  return (
    <div className='w-[100%]   mx-auto bg-black py-[100px] '>
    <div className='w-[90%] mx-auto flex justify-between flex-col md:flex-row items-center gap-[50px] pb-[100px] md:pb-0  border-white md:pl-[60px]'>
        <div className=' md:w-[30%] w-[100%] flex flex-col gap-[20px] justify-center'>
          <div className='flex items-center gap-[15px]'>
            <img className='w-[50px] h-[50px] rounded-full shadow-lg shadow-gray-500' src={logo} alt="" />
            <h1 className='font-bold text-[30px] text-blue-500'>Stylesphere</h1>
          </div>
          <p className='text-gray-300'>My eCommerce website is a modern online clothing store where users can explore, filter, and purchase the latest fashion for men, women, and kids. It offers </p>
        </div>
        <div className='md:w-[30%] w-[100%]  border-white'>
              <h2 className="text-xl font-semibold mb-4 text-blue-400 text-center">Quick Links</h2>
          <ul className="space-y-2 text-gray-300 text-center">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/shop" className="hover:text-white">Shop</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className='md:w-[30%] w-[100%]'>
                <h2 className="text-xl font-semibold mb-4 text-blue-400 text-center">Customer Care</h2>
          <ul className="space-y-2 text-gray-300 text-center">
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/shipping" className="hover:text-white">Shipping Policy</a></li>
            <li><a href="/returns" className="hover:text-white">Returns & Refunds</a></li>
            <li><a href="/support" className="hover:text-white">Support</a></li>
          </ul>
        </div>
          <div className='flex  flex-col md:w-[30%] w-[100%]'>
          <h2 className="text-xl font-semibold mb-4 text-blue-400 text-center">Stay Connected</h2>
          <p className="text-gray-300 text-sm mb-3">
            Subscribe to get updates on new arrivals and special offers.
          </p>
          <div className="flex mb-4 gap-[10px] ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md w-full text-black border-2 border-gray-400"
            />
            <button className="bg-blue-500 px-4 rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
          </div>
    </div>
    </div>
  )
}

export default Footer