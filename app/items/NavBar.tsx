import React from 'react'
import { IoFilterSharp } from "react-icons/io5";
import { RxAvatar } from 'react-icons/rx';


export default function NavBar() {
  return (
    <div className='navbar flex flex-row items-center justify-center w-full'>
        <div className='container max-w-lg bg-inherit p-5 text-2xl flex flex-row items-center justify-between'>

        <IoFilterSharp className='cursor-pointer hover:scale-125 duration-300 '/>
        <h2 className='path'>Home</h2>
        <RxAvatar className='cursor-pointer hover:scale-125 duration-300 '/>
        </div>
      
    </div>
  )
}
