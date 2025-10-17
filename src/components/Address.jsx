import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Address = () => {
    const navigate=useNavigate()
  const [formdata,setFormData]=useState({
    fullname:'',
    address:'',
    paymentMethod:''
  })

  const handleFormData=(e)=>{
 
  setFormData({...formdata,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
     e.preventDefault();
     toast.success("order confirmed successfully!");
       setFormData({
    fullname: '',
    address: '',
    paymentMethod: ''
  });
  }
  console.log(formdata)
    return (
        <div className='w-[100%] min-h-[100vh] py-[100px] pb-[200px]'>
            <h1 className='text-center font-bold text-[25px] md:text-[30px] text-blue-700'>checkout form</h1>
            <div className='md:w-[80%] w-[90%] mx-auto flex flex-col md:flex-row'>
                <form onSubmit={handleSubmit}  action="" className=' w-[100%] md:w-[40%] shadow-lg drop-shadow-gray-400 mx-auto flex flex-col gap-[20px] mt-[30px] rounde-lg px-[40px] py-[40px]'>
                    <div className='flex flex-col gap-[3px]'>
                        <label className='text-[14px] md:text-[16px] text-gray-600 font-bold' htmlFor="">Full Name:</label>
                        <input required value={formdata.fullname} name='fullname' onChange={handleFormData} className='border-[2px] border-gray-300 h-[40px] px-[10px] rounded-lg outline-gray-300'  type="text" placeholder='enter name..' />
                    </div>
                    <div className='flex flex-col gap-[3px]'>
                        <label className='text-[14px] md:text-[16px] text-gray-600 font-bold' htmlFor="">Address:</label>
                        <input required value={formdata.address} name='address' onChange={handleFormData} className='border-[2px] border-gray-300 h-[40px] px-[10px] rounded-lg outline-gray-300' type="text" placeholder='enter Address' />
                    </div>
                    <div>
                        <h1 className='md:text-[21px] text-[17px] font-semibold'>Payment methods</h1>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="card" className='flex gap-[10px] text-[14px]'>
                            <input id='card' value={formdata.paymentMethod} type="radio" name="selsct"  />
                            <span>Credit/Debit Card</span>
                        </label>
                        <label htmlFor="cash" className='flex gap-[10px] text-[14px]'>
                            <input  value={formdata.paymentMethod} id='cash' type="radio" name="selsct"  />
                            <span>Cash On Delivery</span>
                        </label>
                        <label htmlFor=""></label>
                    </div>
                    <div className='text-center'><button className=' w-[100%] h-[42px] font-semibold text-17px bg-blue-500 text-white px-[20px] rounded-lg shadow-lg shadow-gray-400 border-2 transition-all duration-200 border-blue-600 hover:bg-white hover:text-blue-600' onClick={()=>navigate('/')}>submit</button></div>
                </form>
                <div className='w-[300px] h-[300px] mx-auto shadow-lg shadow-gray-300 mt-[50px] px-[30px] py-[30px] rounded-lg'>
                    <h2 className="text-2xl font-bold text-gray-700 border-b pb-2">
                        Order Summary
                    </h2>
                    <div className="mt-4 space-y-4 ">
                        <div className="flex justify-between">
                            <span className='font-semibold'>Items (3)</span>
                            <span className='font-semibold'>₹2,499</span>
                        </div>
                        <div className="flex justify-between">
                            <span className='font-semibold'>Shipping</span>
                            <span className="text-green-600 font-medium">Free</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-semibold text-lg mt-2">
                            <span>Total</span>
                            <span>₹2,499</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Address