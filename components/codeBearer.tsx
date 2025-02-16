"use client"
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa"
import Editor from "@monaco-editor/react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
interface props {
    title: string
}
const Solution = ({ title }: props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [code, setCode] = useState(`print("Hello, world!")`);
    return (
        <div className='flex flex-col bg-[#3D3D3D]/20 px-4 py-4 rounded-xl mt-2'>
            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-white/80'>{title}</h1>
                <div className='px-2 py-2 rounded-full bg-[#3D3D3D]/40 flex items-center justify-center' onClick={() => setIsExpanded(!isExpanded)}>
                    <FaChevronDown className={`text-white/80 ${isExpanded ? "rotate-180" : "rotate-0"} transition-all duration-500 ease-in-out`} />
                </div>
            </div>
            {isExpanded ? <div className='flex flex-col'>
                <div className='h-[2px] bg-gray-600/50 mb-2 mt-4' />
                <div className='flex flex-col gap-2 mt-3'>
                    <h1 className='text-white/80'>Approach & Intiution</h1>
                    <textarea className="bg-transparent border-2 border-gray-600/70 rounded-lg py-2 px-2 text-white/80 focus:border-gray-500 focus:outline-none transition-colors duration-500 text-sm h-[7rem]" placeholder='A brief note about approach & intuitation behind the solution' />
                    <div className='mt-2 flex flex-row items-center justify-between'>
                        <Select>
                            <SelectTrigger className="w-[180px] border-gray-600/70 border-2 text-white/80 rounded-lg">
                                <SelectValue placeholder="Language" defaultValue={"python"}/>
                            </SelectTrigger>
                            <SelectContent className='bg-zinc-800 text-white/80 border-0'>
                                <SelectGroup>
                                    <SelectItem value="python" className='hover:bg-white/80 '>Python-3</SelectItem>
                                    <SelectItem value="cpp" className='hover:bg-white/80'>C++</SelectItem>
                                    <SelectItem value="go" className='hover:bg-white/80'>Golang</SelectItem>
                                    <SelectItem value="rust" className='hover:bg-white/80'>Rust</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className='flex flex-row gap-2'>
                            <div className='flex flex-row gap-2 items-center'>
                                <h1 className='text-white/80'>Time:</h1>
                                <input type="text" className="bg-transparent border-2 border-gray-600/70 w-20 rounded-lg py-[0.4rem] px-2 text-sm text-white/80 focus:border-gray-500 focus:outline-none transition-colors duration-500" placeholder='O(n)' />
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <h1 className='text-white/80'>Space:</h1>
                                <input type="text" className="bg-transparent border-2 border-gray-600/70 w-20 rounded-lg py-[0.4rem] px-2 text-sm text-white/80 focus:border-gray-500 focus:outline-none transition-colors duration-500" placeholder='O(n)' />
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <Editor
                            height="300px"
                            theme="vs-dark"
                            language="python"
                            value={code}
                            onChange={(val) => setCode(val || "")}
                        />
                    </div>
                </div>
            </div>:null}
        </div>
    )
}

export default Solution