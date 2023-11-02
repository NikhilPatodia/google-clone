"use client"
import React, { useState } from 'react'
import {RxCross2} from 'react-icons/rx'
import {HiMicrophone} from 'react-icons/hi'
import {AiOutlineSearch} from 'react-icons/ai'
import { useRouter, useSearchParams } from 'next/navigation'

const SearchBox = () => {
  const router = useRouter();
   const searchParams = useSearchParams();
   const searchTerm = searchParams.get('searchTerm');
    const [term, setTerm] = useState(searchTerm || "");
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(!term){return;}
      router.push(`/search/web?searchTerm=${term}`)
    }
  return (
    <form onSubmit={handleSubmit} className='max-w-3xl bg-gray-200  px-4 py-3 ml-3 rounded-full hover:shadow-md flex-grow transition-shadow'>
      <div className='flex items-center'>
        
        <input value={term} onChange={(e)=>{setTerm(e.target.value)}} className='w-full bg-transparent focus:outline-none' type="text" />

              <RxCross2 onClick={()=>{setTerm("")}} className='sm:mr-2  text-2xl  cursor-pointer'/>
              <HiMicrophone className='text-blue-600 pl-3 hidden sm:inline text-4xl border-l-2 border-gray-300 cursor-pointer'/>
              <AiOutlineSearch onClick={handleSubmit} className='text-2xl hidden sm:inline ml-2 cursor-pointer'/>
      </div>
    </form>
  )
}

export default SearchBox