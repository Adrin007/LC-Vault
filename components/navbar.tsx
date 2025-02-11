import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[5rem] md:px-10 pl-6 pr-3 py-5 justify-between flex flex-row bg-[#3D3D3D]/30 rounded-lg items-center'>
        <div className='flex flex-row gap-2 items-center'>
            <h1 className='text-white/90 md:text-2xl text-lg
             font-normal font-amsterdam mt-1'>Adrin Sanchez</h1>
        </div>
        <div className='bg-white flex justify-center items-center md:text-sm py-2 md:px-3 px-2 font-semibold rounded-l-full rounded-r-full hover:bg-white/90 transition-all duration-600 text-xs'>
            Add Problem
        </div>
    </div>
  )
}

export default Navbar