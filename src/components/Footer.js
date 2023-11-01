"use client"
import React from 'react'
import CountryName from './CountryName'

const Footer = () => {
  return (
    <footer className='w-full h-fit  flex flex-col space-y-3 bg-[#eaeef2] absolute bottom-0'>
        <div className='border-b-2 px-8 py-3 text-gray-500'>
            <CountryName/>
        </div>
        <div className='flex flex-col sm:flex-row justify-between px-8 py-3'>
            <ul className='flex space-x-2'>
                 <li className='text-gray-500 hover:underline cursor-pointer'>About</li>
                 <li className='text-gray-500 hover:underline cursor-pointer'>Business</li>
                 <li className='text-gray-500 hover:underline cursor-pointer'>HowSearchWorks</li>
                 <li className='text-gray-500 hover:underline cursor-pointer'>Advertising</li>
            </ul>
            <ul className='flex space-x-2'>
         <li className='text-gray-500 hover:underline cursor-pointer'>Privacy</li>
         <li className='text-gray-500 hover:underline cursor-pointer'>Term</li>
         <li className='text-gray-500 hover:underline cursor-pointer'>Setting</li>
            </ul>

        </div>
    </footer>
  )
}

export default Footer