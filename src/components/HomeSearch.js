"use client"
import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {HiMicrophone} from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const HomeSearch = () => {
    const router = useRouter();
    const [input, setInput] = useState("");
    const[loading, setLoading] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!input){return;}
      router.push(`/search/web?searchTerm=${input}`)
    }
    const randomSearch = async()=>{
        setLoading(true)
        const res = await fetch(`https://random-word-api.herokuapp.com/word`);
        const data = await res.json();
        if(!res){return;}
        router.push(`/search/web?searchTerm=${data}`)
        setLoading(false);
    }
  return (
    <>
    <form onSubmit={handleSubmit} className='w-full p-3 flex items-center mt-6 mx-auto max-w-[90%] sm:max-w-2xl lg:max-w-4xl rounded-full hover:shadow-md focus-within:shadow-md space-x-2'>
         <AiOutlineSearch className='text-2xl text-gray-500 cursor-pointer'/>
         <input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text" className='w-full outline-none' />
         <HiMicrophone className='text-2xl cursor-pointer'/>
  
    </form>
     <div className='mt-6 flex flex-col sm:flex-row sm:space-x-3 sm:space-y-0  items-center justify-center space-y-3'>
        <button  className='btn '>Google Search</button>
        <button  onClick={()=>{randomSearch()}} disabled={loading}  className='btn flex items-center justify-center disabled:opacity-80'>{loading?(<Image width={25} height={20} src='spinner.svg' alt='loading'/>):('I am Feeling Lucky')}</button>
     </div>
     </>
  )
}

export default HomeSearch