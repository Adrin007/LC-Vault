import React from 'react'

const RankStats = () => {
    return (
        <div className='w-full h-full flex gap-1 flex-col py-7 font-semibold px-3 bg-[#3D3D3D]/30 rounded-xl'>
            <div className='w-full'>
                <h1 className='text-white/80 md:text-3xl text-xl font-bold'>
                    Stats
                </h1>
            </div>
            <div className='h-[2px] bg-gray-600/50 mb-2' />
            <div className='flex flex-col justify-start gap-2 text-white/80'>
                <div className='flex flex-row gap-2 items-center'>
                    <div className="w-2 h-2 rounded-full bg-[#15B392]" />
                    <h1 className='text-sm'>
                        Total Submissions:
                    </h1>
                    <h1 className='text-sm'>
                        450
                    </h1>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className="w-2 h-2 rounded-full bg-[#15B392]" />
                    <h1 className='text-sm'>
                        Total Active Days:
                    </h1>
                    <h1 className='text-sm'>
                        95
                    </h1>
                </div>
                <div className='flex flex-row gap-2 items-center justify-start'>
                    <div className="w-2 h-2 rounded-full bg-[#15B392]" />
                    <h1 className='text-sm'>
                        Most Used Languge:
                    </h1>
                    <h1 className='text-sm'>
                        Python 🐍
                    </h1>
                </div>
                <div className='flex flex-row gap-2 items-center justify-start'>
                    <div className="w-2 h-2 rounded-full bg-[#15B392]" />
                    <h1 className='text-sm'>
                        Least Used Languge:
                    </h1>
                    <h1 className='text-sm'>
                        Rust 🦀
                    </h1>
                </div>
                <div className='flex flex-row gap-2 items-center justify-start'>
                    <div className="w-2 h-2 rounded-full bg-[#15B392]" />
                    <h1 className='text-sm'>
                        Contest Rating:
                    </h1>
                    <h1 className='text-sm'>
                        1470
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default RankStats