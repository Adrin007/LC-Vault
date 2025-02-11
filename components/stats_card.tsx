"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Progress } from './ui/progress'
import { RadialChart } from './radial_chart'
import RankStats from './numerical_stats'
import StatsSkeleton from './statsSkeleton'
interface Stats {
    totalSolved: number,
    easySolved: number,
    mediumSolved: number,
    hardSolved: number
}
const StatsCard = () => {
    const [userStats, setUserStats] = useState<Stats | null>(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch("/api/getStats")
                const data = await response.json()
                setUserStats(data.data)
            } catch (error) {
                console.log("Error in stats_card", error)
            }
            finally {
                setLoading(false);
            }
        }
        fetchStats()
    }, [])
     if (loading) return (
            <StatsSkeleton/>
    );
    const userStatsa = {
        totalSolved: 150,
        totalProblems: 3449,
        easySolved: 60,
        mediumSolved: 80,
        hardSolved: 10,
    }
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
            <div className='w-full h-full flex py-10 justify-center items-center bg-[#3D3D3D]/30 rounded-xl'>
                <div className='flex flex-row mr-2 justify-center items-center gap-3'>
                    <div id="circle-progress">
                        <div className="relative w-[8rem] h-[8rem]">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                <circle
                                    className="text-gray-600/25 stroke-current"
                                    strokeWidth="8"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                ></circle>
                                <circle
                                    className="text-[#FF9D23] progress-ring stroke-current"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    strokeDasharray={`${(userStats!.totalSolved / 3440) * 251.2} 251.2`}
                                    strokeDashoffset="0"
                                    transform="rotate(-90 50 50)"
                                ></circle>
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-white/80 text-[1.8rem] font-bold">
                                    {userStats!.totalSolved}
                                </span>
                                <div className='h-[2px] w-[3rem] bg-gray-600/50' />
                                <span className="text-white/50 text-xs font-bold mt-1">
                                    {3440}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-[10rem] space-y-2 text-white text-xs font-semibold">
                            <div className='flex flex-row justify-between items-center'>
                                <h1 className='font-bold text-sm text-white/80'>Easy</h1>
                                <h1 className='text-white/80'>{userStats!.easySolved}/{userStats!.totalSolved}</h1>
                            </div>
                            <Progress
                                value={(userStats!.easySolved / userStats!.totalSolved) * 100}
                                color="#15B392"
                                className="bg-gray-600/25 transition-all duration-500 ease-in-out"
                            />
                            <div className='flex flex-row justify-between items-center'>
                                <h1 className='font-bold text-sm text-white/80'>Medium</h1>
                                <h1 className='text-white/80'>{userStats!.mediumSolved}/{userStats!.totalSolved}</h1>
                            </div>
                            <Progress value={(userStats!.mediumSolved / userStats!.totalSolved) * 100} color='#ffb700' className="bg-gray-600/25" />
                            <div className='flex flex-row justify-between items-center'>
                                <h1 className='font-bold text-white/80 text-sm'>Hard</h1>
                                <h1 className='text-white/80'>{userStats!.hardSolved}/{userStats!.totalSolved}</h1>
                            </div>
                            <Progress value={(userStats!.hardSolved / userStats!.totalSolved) * 100} color='#f63737' className="bg-gray-600/25" />
                        </div>
                    </div>
                </div>
            </div>
            <RadialChart totalSolved={userStats!.totalSolved} easySolved={userStats!.easySolved} mediumSolved={userStats!.mediumSolved} hardSolved={userStats!.hardSolved} />
            <RankStats />
        </div>
    )
}

export default StatsCard