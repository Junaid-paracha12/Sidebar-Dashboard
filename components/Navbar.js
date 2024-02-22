import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
   <>
   <div className='flex items-center justify-between px-4 py-2'>
    <ul>
        <li className='relative'>
        <input placeholder='Search' type='search' className='px-8 py-1 bg-slate-200/70 rounded-md border-slate-200/70 w-32' />
        <span className='absolute left-0 top-0 p-2'>
            <Image src={"/search.svg"} width={20} height={20} className='h-4 w-4' />
        </span>
        </li>
    </ul >
    <ul className='bg-slate-200/70 flex items-center py-0.5 px-0.5 rounded-md'>
        <li>
            <button className='py-1.5 px-4 bg-white shadow-sm rounded-md text-sm font-semibold'>Dashboard</button>
        </li>
        <li className='px-3 text-sm'>
          Website
        </li>
    </ul>
    <ul className='flex items-center gap-6'>
        <li className='flex items-center gap-1 px-2 py-1.5 bg-slate-200/70 rounded-md text-sm font-semibold '>
            Cart
            <span className=' py-1'>
                <Image src={"/shop.png"} width={20} height={20} className='w-4 h-4' />
            </span>
        </li>
        <li className='flex items-center gap-1'>
            <Image src={"/1.png"} width={20} height={20} className='w-6 h-6 rounded-full' />
            <p className='text-sm font-semibold'>John Doe</p>
        </li>
    </ul>
   </div>
   </>
  )
}









