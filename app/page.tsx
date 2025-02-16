import React from 'react'
import StatsCard from '@/components/stats_card'
import RecProblem from '@/components/recentProblem'
import Navbar from '@/components/navbar'
const Main = () => {
  return (
    <div className='bg-black w-full font-hentaigana flex flex-col min-h-screen md:px-5 px-3 py-4 gap-4'>
      <Navbar button={true}/>
      <StatsCard/>
      <div className='bg-[#3D3D3D]/30 rounded-xl font-hentaigana py-7 px-3 md:px-5 flex flex-col'>
        <div>
          <h1 className='text-white/80 md:text-3xl text-xl font-bold'>Recent Submissions</h1>
        </div>
        <div className='h-[2px] bg-gray-600/50 mt-2 mb-2' />
        <RecProblem/>
      </div>
    </div>
  )
}

export default Main