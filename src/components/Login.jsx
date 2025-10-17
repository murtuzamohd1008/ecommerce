
import React from 'react'
import google from '../assets/google.jpg'
import { toast } from 'react-toastify'
const Login = () => {
  const handleSubmit=(e)=>{
   e.preventDefault();
  }
  return (
    <div className='w-[100%] h-[100vh] bg-[#efe6e6] py-[140px]'>
        <h1 className='text-center font-bold text-[30px] text-blue-600 capitalize'>login page</h1>
        <div className='w-[35%] h-[450px] mx-auto shadow-lg bg-white rounded-xl shadow-blue-300 mt-[50px] p-[20px] py-[60px]'>
            <div className='w-[90%] mx-auto h-[40px]'>
                <button className=' w-[100%] h-[40px] border-[1px] border-blue-400 rounded-full cursor-pointer flex justify-center items-center shadow-lg shadow-gray-200 py-[3px]'>
                    <img className='w-[40px] h-[35px] rounded-full object-fill' src={google} alt="" />
                    <p className='text-gray-600 font-semibold'>login with google</p>
                </button>
            </div>
            <p className='text-center mt-[20px] font-semibold text-gray-600'>OR</p>
            <hr className='h-[1px] bg-blue-400 w-[90%] mx-auto mt-[10px]'/>
               <form  action=""  className='w-[90%] mx-auto flex justify-center items-center gap-[20px] flex-col mt-[50px]'>
                    <input required className='w-[100%] h-[40px] border-blue-400 border-[1px] rounded-full shadow-lg shadow-gray-300 px-[14px] outline-none placeholder:text-[16px] text-[15px]' type="text" placeholder='email...'/> 
                    <input required className='w-[100%] h-[40px] border-blue-400 border-[1px] rounded-full shadow-lg shadow-gray-300 px-[14px] outline-none placeholder:text-[16px] text-[15px]'  type="text" placeholder='password...' />
                    <button className='w-[100%] h-[40px] border-blue-500 border-2 rounded-full shadow-lg mt-[10px] bg-blue-600 text-white font-semibold  shadow-blue-600 px-[14px] outline-none placeholder:text-[16px] text-[18px] cursor-pointer' >login</button>  
               </form>
               <p className='text-center mt-[16px]'>don't have an account ? <span className='text-blue-600 cursor-pointer font-semibold'>signup</span></p>
        </div>
    </div>
  )
}

export default Login