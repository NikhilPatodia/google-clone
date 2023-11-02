import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import {RiSettings3Line} from 'react-icons/ri';
import {TbGridDots} from 'react-icons/tb';
import SearchOptions from './SearchOptions';

const SearchHeader = () => {
  return (
    <header>
        <div className='flex p-6 justify-between w-full items-center'>
            <Link href={'/'}>
            <Image width="120" height="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugzlUGL5yh2xVnh6GzR6Pt49WXGFkeTgIQ4mEFzgqzdBp1ykpf_o0EyFNrOFRrfETJ3k&usqp=CAU" alt="google
        " ></Image>
        
            </Link>
            <div className='flex-1'>
            <SearchBox/>

            </div>
            <div className="hidden md:inline-flex space-x-2 ">
                <RiSettings3Line className='header-icons'/>
                <TbGridDots className='header-icons'/>

            </div>
            <button className='bg-blue-500 ml-2 rounded-md hover:brightness-105 hover:shadow-md transition-all px-3 py-2'>Sign Up</button>

        </div>
        <div>
            <SearchOptions/>
        </div>
    </header>
  )
}

export default SearchHeader