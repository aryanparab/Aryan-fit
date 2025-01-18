import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
      <p>Be Legan- Dont wait for it -dary</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Aryan<span className='text-blue-400'>Fit</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably legandary</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>chick magnet</span>, afflicted with getting too much attention, and something I want can show off to myself</p>
    
    <Button func={()=>{
      window.location.href = '#generate'
    }} text={"Accept and Begin"}></Button>
    </div>
  )
}
