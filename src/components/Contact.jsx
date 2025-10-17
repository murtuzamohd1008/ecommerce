import React from 'react'
import { FaAddressCard } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
  return (
    <div className='w-[100%] min-h-[100vh] py-[160px] pb-[80px] bg-gradient-to-r from-gray-800 to-gray-700 '>
      <h1 className='text-center font-bold text-4xl text-purple-600 capitalize'>contact us</h1>
      {/* <p className='md:w-[50%] w-[90%] mx-auto  text-center mt-[30px] text-gray-300'>At stylespere, we believe communication is the key to building lasting relationships with our customers.
        Whether you have a question about your recent order, need help with product details, .</p> */}
      <div className=' w-[95%] md:w-[70%]  mx-auto gap-[50px]  flex flex-col-reverse md:flex-row justify-center items-center bg-transparent  mt-[100px] shadow-lg shadow-gray-600 py-[15px] px-[10px]'>
        <div className='w-[100%] md:w-[40%] flex justify-center flex-col item text-white gap-[25px]'>
          <div className='flex items-center gap-[15px]'>
          <div className='bg-white p-[14px] rounded-full shadow-lg shadow-gray-500'> <FaAddressCard size={24} className='text-black'/></div>
          <div>
            <p className='font-semibold'>Address:</p>
            <p>prayagraj(allahabad) uttar pradesh</p>
          </div>
        </div>
          <div className='flex items-center gap-[15px]'>
            <div className='bg-white p-[14px] rounded-full shadow-lg shadow-gray-500'> <FaPhoneAlt  size={24} className='text-green-500'/></div>
            <div>
              <p className='font-semibold'>Phone:</p>
              <p>+91-2345-5678-234</p>
            </div>
          </div>
          <div className='flex items-center gap-[15px]'>
            <div className='bg-white p-[14px] rounded-full shadow-lg shadow-gray-500'> <MdOutlineMail size={24} className='text-green-400'/></div>
            <div>
              <p className='font-semibold'>Email:</p>
              <p>conatctus@gmai.com</p>
            </div>
          </div>
        </div>
        <div className='w-[95%] mx-auto md:w-[40%] h-[100%] border-none bg-gray-700 pt-[50px] pb-[50px] shadow-lg shadow-gray-600 md:border-2 border-gray-500'>
            <form action="" className=' w-[100%] md:w-[85%] mx-auto  border-white  flex justify-center items-center flex-col gap-[20px]'>
              <input type="text" placeholder='enter name..' className='w-[100%] h-[40px] bg-transparent border-2 border-gray-500 outline-gray-500 rounded-md px-2' />
              <input type="text" placeholder='enter email..' className='w-[100%] h-[40px] bg-transparent border-2 border-gray-500 outline-gray-500 rounded-md px-2' />
              <textarea name="" id="" placeholder='write message..' className='w-[100%] min-h-[100px] bg-transparent border-2 border-gray-500 outline-gray-500 rounded-md px-2' ></textarea>
              <button className='w-[100%] bg-gradient-to-r from-pink-500 to-purple-600 py-[12px] text-white font-semibold rounded-lg text-[17px] shadow-lg shadow-gray-600'>send us</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact