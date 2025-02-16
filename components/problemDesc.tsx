import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Solution from './codeBearer'
const ProblemData = () => {
    return (
        <div className='flex flex-col gap-7'>
            <div className='bg-[#3D3D3D]/30 rounded-xl px-5 py-7'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-white/80 text-xl font-semibold'>Problem Data</h1>
                    <div className='h-[2px] bg-gray-600/50 mb-2' />
                    <div className='flex flex-col mt-2 gap-3'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-white/80'>Problem Title</h1>
                            <input type="text" className="bg-transparent border-2 border-gray-600/70 rounded-lg py-2 px-2 text-white/80 focus:border-gray-500 focus:outline-none transition-colors duration-500" placeholder='Title of the problem' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-white/80'>Problem Explanation</h1>
                            <textarea className="bg-transparent border-2 border-gray-600/70 rounded-lg py-2 px-2 text-white/80 focus:border-gray-500 focus:outline-none transition-colors duration-500 text-sm h-[7rem]" placeholder='A brief explanation about the problem' />
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 mt-2 items-center justify-start'>
                        <div className='flex flex-col gap-2 w-[10rem]'>
                            <h1 className='text-white/80'>Problem Code</h1>
                            <input type="number" className="bg-transparent border-2 border-gray-600/70 rounded-lg py-[0.4rem] text-sm px-2 text-white/80 focus:border-gray-500 focus:outline-none transition-colors duration-500" placeholder='#' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-white/80'>Difficulty</h1>
                            <Select>
                                <SelectTrigger className="w-[180px] border-gray-600/70 border-2 text-white/80 rounded-lg">
                                    <SelectValue placeholder="difficulty?" />
                                </SelectTrigger>
                                <SelectContent className='bg-zinc-800 text-white/80 border-0'>
                                    <SelectGroup>
                                        <SelectItem value="easy" className='hover:bg-white/80 text-[#15B392]'>Easy</SelectItem>
                                        <SelectItem value="medium" className='hover:bg-white/80 text-[#ffb700]'>Medium</SelectItem>
                                        <SelectItem value="hard" className='hover:bg-white/80 text-[#f63737]'>Hard</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-white/80'>Felt Like</h1>
                            <Select>
                                <SelectTrigger className="w-[180px] rounded-lg border-gray-600/70 border-2 text-white/80">
                                    <SelectValue placeholder="How's It?" />
                                </SelectTrigger>
                                <SelectContent className='bg-zinc-800 text-white/80 border-0'>
                                    <SelectGroup>
                                        <SelectLabel className='text-[#15B392]'>Easy</SelectLabel>
                                        <SelectItem value="Easy-Easy" className='hover:bg-white/80'>Easy - Easy</SelectItem>
                                        <SelectItem value="Medium-Easy" className='hover:bg-white/80'>Medium - Easy</SelectItem>
                                        <SelectItem value="Hard-Easy" className='hover:bg-white/80'>Hard - Easy</SelectItem>
                                        <SelectLabel className='text-[#ffb700]'>Medium</SelectLabel>
                                        <SelectItem value="Easy-Medium" className='hover:bg-white/80'>Easy - Medium</SelectItem>
                                        <SelectItem value="Medium-Medium" className='hover:bg-white/80'>Medium - Medium</SelectItem>
                                        <SelectItem value="Hard-Medium" className='hover:bg-white/80'>Hard - Medium</SelectItem>
                                        <SelectLabel className='text-[#f63737]'>Hard</SelectLabel>
                                        <SelectItem value="Easy-Hard" className='hover:bg-white/80'>Easy - Hard</SelectItem>
                                        <SelectItem value="Medium-Hard" className='hover:bg-white/80'>Medium - Hard</SelectItem>
                                        <SelectItem value="Hard-Hard" className='hover:bg-white/80'>Hard - Hard</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <h1 className='text-white/80'>Problem URL</h1>
                            <input type="url" className="bg-transparent border-2 border-gray-600/70 rounded-lg py-[0.4rem] px-2 text-sm text-white/80 focus:border-gray-500 focus:outline-none transition-colors duration-500" placeholder='https://leetcode.com' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#3D3D3D]/30 rounded-xl px-5 py-7'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-white/80 text-xl font-semibold'>Solutions & Approaches</h1>
                    <div className='h-[2px] bg-gray-600/50 mb-2' />
                </div>
                <div>
                    <Solution title='Brute Force Solution'/>
                    <Solution title='Better Solution'/>
                    <Solution title='Optimal Solution'/>
                </div>
            </div>
            <div className='w-full py-4 bg-white/80 text-black flex items-center justify-center rounded-xl hover:bg-white/90 transition-colors duration-500'>
                <h1 className='text-lg font-semibold'>Save Solution</h1>
            </div>
        </div>
    )
}
export default ProblemData