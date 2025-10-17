import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux/cartSlise.js'
import { useNavigate } from 'react-router-dom'
const Card = ({ item }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart)
    const [showbtn, setShowBtn] = useState(false);
    const navigate=useNavigate()
    console.log(cart)

    return (
        <div onClick={()=>navigate(`/productdetail/${item.id}`)} className='w-[280px] cursor-pointer relative h-[330px] shadow-lg shadow-gray-300 rounded-lg flex flex-col gap-[24px]'>
            <img className='h-[50%] w-[90%] mx-auto object-fill rounded-lg transition-transform duration-200 hover:scale-105' src={item.img} alt="" />
            <div className='px-[10px] flex flex-col gap-[10px] relative '>
                <p className='font-semibold text-[18px] text-blue-700'>{item.name}</p>
                <div className='flex text-yellow-300'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className='text-[17px] font-bold'>&#8377;{item.price}</p>

            </div>
            <div className='relative mt-[20px]' onClick={() => dispatch(addCart(item))}>

                <span className='absolute bottom-[10px]  right-[10px] bg-green-400 text-white px-[15px] py-[7px] rounded-full font-bold text-[18px] cursor-pointer '>+</span>

            </div>
        </div>
    )
}

export default Card