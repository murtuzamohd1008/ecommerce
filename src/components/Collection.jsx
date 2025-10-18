import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import {data} from './Data'
import Card from './Card';
import { contextData } from '../context/ContextApi';
import { useSelector } from 'react-redux';
const Collection = () => {
    const {product}=useSelector((state)=>state.product)
    const {showSearch,setShowSearch,input,setInput}=useContext(contextData);
    const [toggle, setToggle] = useState(false);
    // const [products,setproducts]=useState(data);
    const [filterProduct,setFilterProduct]=useState([]);
    const [category,setCategory]=useState('');
    
   
    const filterItem=()=>{
        let productCopy=product.slice();
       
        if(category==='men'){
             productCopy=productCopy.filter(item=>item.category===category.toLowerCase())
        }
        else if(category==='women'){
            productCopy=productCopy.filter((item)=>item.category===category.toLowerCase()) 
        }
        else if(category==='kid'){
            productCopy=productCopy.filter(item=>item.category.toLowerCase()==category.toLowerCase())
        }
        else if(search){
            productCopy=productCopy.filter((item)=>item.name.toLowerCase().includes(input.toLowerCase()))
        }
        setFilterProduct(productCopy)
    }

  
    useEffect(()=>{
        filterItem()
    },[category,product,input])
    return (
        <div className='py-[70px] min-h-[100vh] z-10 md:flex'>
            <div className={`w-[15%] fixed hidden md:block top-[90px] h-[100vh] border-r-2 px-[30px] ${showSearch?"py-[60px]":"py-[20px]"}`}>
                <h1 className='text-[28px] font-bold text-blue-600'>Filter</h1>
                <div className='flex flex-col gap-[8px] '>
                    <p onClick={()=>setCategory('men')} className='text-[17px] font-semibold cursor-pointer decoration-blue-500  hover:underline'>Men

                    </p>
                    <p onClick={()=>setCategory('women')} className='text-[17px] font-semibold cursor-pointer decoration-blue-500 hover:underline '>Women

                    </p>
                    <p onClick={()=>(setCategory('kid'))} className='text-[17px] font-semibold cursor-pointer decoration-blue-500 hover:underline'>Kids</p>
                </div>
            </div>
            <div className='md:w-[85%] w-[100%] min-h-[100vh] md:ml-[15%] py-[20px]'>
                <div className='md:hidden h-[100%] fixed w-[100%] '>
                    <div className='relative w-[100%]'>
                         <div className='px-[8px]'>
                        <h1 className='text-[25px] font-semibold text-blue-500'>filter</h1>
                        <div className='flex items-center' onClick={() => setToggle((prev) => !prev)}>
                            {
                                toggle ? <IoIosArrowDown className='mt-[7px]' size={24} /> : <IoIosArrowForward className='mt-[7px]' size={24} />
                            }
                        </div>
                    </div>
                     <div className={`absolute w-[20%] h-[230px] transition-all duration-200 ease-out ${toggle?"block":"hidden"}  bg-blue-500 text-white font-semibold flex gap-[13px]  flex-col px-[14px] py-[10px]`}>
                        {/* <span className='text-right' onClick={()=>setToggle(false)}>X</span> */}
                         <p className='hover:text-teal-400' onClick={()=>{setToggle(false);setCategory('men')}}>Men</p>
                    <p className='hover:text-gray-400' onClick={()=>{setToggle(false);setCategory('women')}}>Women</p>
                    <p className='hover:text-gray-400' onClick={()=>{setToggle(false);setCategory('kid')}}>Kids</p>
                </div>
                    </div>
                   
                </div>
                <div className={`flex justify-center items-center flex-wrap ${showSearch?"py-[100px]":"py-[60px]"} gap-[20px]`}>
                    {
                      filterProduct.map((item)=><Card item={item}/>)
                    }
                </div>
               
            </div>
        </div>
    )
}

export default Collection