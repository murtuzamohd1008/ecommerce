import React, { useContext, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoCarSharp, IoCartSharp, IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { contextData } from '../context/ContextApi'
import { RxCross1 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { useSelector } from 'react-redux'
import {motion} from 'framer-motion'
const Navbar = () => {
    const {totalQuantity}=useSelector((state)=>state.cart)
    const { showSearch, setShowSearch,input,setInput } = useContext(contextData)
    const [toggle,setToggle]=useState(false)
    const navigate = useNavigate();
    return (
        <div className={`w-[100vw] mx-auto bg-white  ${showSearch ? "h-[130px] md:h-[150px]" : "h-[70px] md:h-[90px]"} z-[9999] shadow-lg px-[5px] md:px-[40px] py-[15px] fixed left-0 right-0 top-0 `}>
            <div className='flex md:justify-between justify-center items-center gap-[10px] md:gap-0 relative'>
                <div>
                    <motion.h1
                    initial={{opacity:0,y:-50}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:2,ease:"easeOut"}}
                     className='md:text-[30px] sm:text-[20px]  text-[18px] font-semibold md:font-bold text-purple-700 cursor-pointer' onClick={() => navigate('/')}>styleSphere</motion.h1>
                </div>
                <div className='w-[45%] md:w-[50%] '>
                    <motion.div
                      initial={{opacity:0,y:-50}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:2,ease:"easeOut"}}
                     className='w-[50%] mx-auto hidden md:flex justify-center items-center gap-[50px] z-0 pt-[30px] text-[18px] font-semibold text-blue-500'>
                        <Link to={'/'} className='relative group'>Home
                            <span className='w-0 h-[2px] bg-indigo-500 rounded-full absolute transition-all duration-200 -bottom-1 left-0 group-hover:w-[100%]'></span>
                        </Link>
                        <Link to='/collection' className='relative group'>Collection
                            <span className='w-0 h-[2px] bg-indigo-500 rounded-full absolute transition-all duration-200 -bottom-1 left-0 group-hover:w-[100%]'></span>
                        </Link>
                        <Link to='/about' className='relative group'>About
                            <span className='w-0 h-[2px] bg-indigo-500 rounded-full absolute transition-all duration-200 -bottom-1 left-0 group-hover:w-[100%]'></span>
                        </Link>
                        <Link to='/contact' className='relative group'>Contact
                            <span className='w-0 h-[2px] bg-indigo-500 rounded-full absolute transition-all duration-200 -bottom-1 left-0 group-hover:w-[100%]'></span>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{opacity:0,y:-50}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:2,ease:"easeOut"}}
                 className='flex justify-center items-center gap-[13px] md:gap-[20px] relative'>
                    <button className='cursor-pointer text-[15px]' onClick={() => {setShowSearch(!showSearch);navigate('/collection')}}><CiSearch size={25} className='text-gray-400 font-bold' /></button>
                    <button className='text-[17px] md:font-semibold text-blue-600 cursor-pointer' onClick={()=>navigate('/login')}>login</button>
                    <div className='relative '>
                        <IoCartSharp onClick={()=>navigate('/order')} size={20} className='text-red-400 cursor-pointer'/>
                        <span className='absolute bottom-[18px] left-[10px]  font-semibold  px-[5px] md:px-[10px] rounded-full  md:py-[3px] text-black'>{totalQuantity}</span>
                    </div>
                    <div className='md:hidden' onClick={()=>setToggle((prev)=>!prev)}>
                        {
                             !toggle? <IoMenu size={22}/>:<RxCross1 size={22}/>
                        }
                       
                    </div>
                      
                </motion.div>
            </div>
            {
                showSearch &&

                <div className='w-[100%] mt-[18px]'>
                    <form action="" className=' w-[90%] py-[6px] md:w-[50%] mx-auto flex justify-center items-center shadow-lg outline-1 h-[40%] md:h-[50px] rounded-md px-[20px] shadow-gray-200 outline-gray-300 '>
                        <input onChange={(e)=>setInput(e.target.value)} className='w-[100%]   border-gray-400 border-none outline-none placeholder:text-[16px] text-[16px]' type="text" placeholder='search product..'/>
                    </form>

                </div>}
                <div className={`w-[100%] flex flex-col z-[9999] items-center px-[20px] py-[40px]  gap-[20px] backdrop-blur-2xl transition-all duration-300 ease-out  h-[250px] bg-blue-400 md:hidden absolute top-[55px] ${toggle?"right-0":"right-[-100%]"} font-semibold text-white`}>
                              <Link to={'/'} className='relative group' onClick={()=>setToggle(false)}>Home
                            <span className='w-0 h-[2px] bg-white rounded-full absolute transition-all duration-200 -bottom-1 left-0 group-hover:w-[100%]'></span>
                        </Link>
                        <Link to='/collection' className='relative group' onClick={()=>setToggle(false)}>Collection
                            <span className='w-0 h-[2px] bg-white rounded-full absolute transition-all duration-200 -bottom-1 left-0 group-hover:w-[100%]'></span>
                        </Link>
                        <Link to='/about' className='relative group' onClick={()=>setToggle(false)}>About
                            <span className='w-0 h-[2px] bg-white rounded-full absolute transition-all duration-200 -bottom-1 left-0 group-hover:w-[100%]'></span>
                        </Link>
                        <Link to='/contact' className='relative group' onClick={()=>setToggle(false)}>Contact
                            <span className={`w-0 h-[2px] bg-white rounded-full absolute transition-all duration-200 -bottom-1 left-0 group-hover:w-[100%]`}></span>
                        </Link> 
                </div>
        </div>
    )
}

export default Navbar