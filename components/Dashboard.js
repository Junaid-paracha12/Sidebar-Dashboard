import Image from 'next/image'
import React from 'react'

export default function Dashboard() {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
       <div className='flex flex-col gap-6'>
        <div className='relative'>
            <Image src={"/pic1.jpg"} width={300} height={30} className='h-[35vh] w-full rounded-md object-cover' />
            <div className='absolute inset-0 flex items-center'>
               <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold max-w-28 p-3'>Seater Sofa</h1>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
         <div className='relative'>
            <Image src={"/pic2.jpg"} width={300} height={300} className='h-[55vh] w-full rounded-md object-cover' />
           <div className='absolute inset-0 flex items-center'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold max-w-28 p-3'>Stool & Benches</h1>
           </div>
         </div>
         <div className='relative'>
            <Image src={"/pic4.jpg"} width={300} height={300} className='h-[55vh] w-full rounded-md object-cover' />
           <div className='absolute inset-0 flex items-center'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold max-w-28 p-3'>Stool Chair</h1>
           </div>
         </div>

        </div>
       </div>
       <div className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
         <div className='relative'>
            <Image src={"/pic3.jpg"} width={300} height={300} className='h-[55vh] w-full rounded-md object-cover' />
           <div className='absolute inset-0 flex items-center'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold max-w-28 p-3'>Plumage Hand</h1>
           </div>
         </div>
         <div className='relative'>
            <Image src={"/pic4.jpg"} width={300} height={300} className='h-[55vh] w-full rounded-md object-cover' />
           <div className='absolute inset-0 flex items-center'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold max-w-28 p-3'>Dinning Chair</h1>
           </div>
         </div>

        </div> 
        <div className='relative'>
            <Image src={"/pic5.jpg"} width={300} height={30} className='h-[35vh] w-full rounded-md object-cover' />
            <div className='absolute inset-0 flex items-center'>
               <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold max-w-28 p-3'>Accent Chair</h1>
            </div>
        </div>
       </div>
    </div>
    </>
  )
}
