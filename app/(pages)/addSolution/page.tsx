import ProblemData from '@/components/problemDesc'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black w-full font-hentaigana flex flex-col min-h-screen md:px-[2rem] px-3 py-8 gap-4'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-[2.5rem] font-semibold text-white/90'>Problem Breakdown</h1>
        <ProblemData/>
      </div>
    </div>
  )
}

export default page