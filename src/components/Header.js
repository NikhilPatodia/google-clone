import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {TbGridDots} from 'react-icons/tb'
const Header = () => {
  return (
    <div className='w-full   flex justify-end items-center  p-4 '>
         <div className='flex space-x-4 items-center mr-3'>
           <Link href='https://google.mail.com' className='hover:underline cursor-pointer'>Gmail</Link>
           <Link href='#' className='hover:underline cursor-pointer'>Image</Link>
           <TbGridDots className='text-4xl  hover:bg-gray-200 hover:rounded-full p-2 '/>
           <button className='bg-blue-500 px-4 py-2 hover:shadow-md hover:brightness-105 transition-shadow rounded-lg text-gray '>Sign In</button>
           </div>

        
    </div>
   

  )
}

export default Header