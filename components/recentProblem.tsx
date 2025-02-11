"use client"
import React, { useEffect, useState } from 'react'
import { Difficulty, DifficultyCircle } from './problemDifficulty'
import { Badge } from './ui/badge'
import SkeletonLoader from './listSkeleton';
interface Problem {
    title: string;
    difficulty: string;
    questionId: string;
    tags: string[];
    runtime: string;
    language: string;
}
const RecProblem = () => {
    const [problems, setProblems] = useState<Problem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const response = await fetch("/api/getProblems");
                const data = await response.json();
                setProblems(data.data);
            } catch (error) {
                console.error("Error fetching problems:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProblems();
    }, []);

    if (loading) return (
        <SkeletonLoader/>
    );
    return (
        <div>
            {[...problems]
                .map((problem, index) => (
                    <div key={index} className='bg-[#3D3D3D]/20 mt-3 flex flex-col gap-3 text-white/80 px-3 py-4 rounded-lg tracking-tight md:tracking-normal'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-row gap-2 text-lg items-center'>
                                <DifficultyCircle difficulty={problem.difficulty} />
                                <h1 className='font-bold'>#{problem.questionId}</h1>
                                <h1 className='font-bold truncate max-w-[200px] md:max-w-[400px]'>{problem.title}</h1>
                            </div>
                            <div className='hidden md:flex'>
                                <Difficulty difficulty={problem.difficulty} />
                            </div>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className="md:flex flex-wrap gap-2 hidden">
                                {problem.tags.map((tag, i) => (
                                    <Badge key={i} variant="secondary" className="bg-[#3D3D3D]/50 text-white/70 text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <div className='flex flex-row gap-2'>
                                <Badge variant="secondary" className="bg-[#3D3D3D]/50 text-white/70 text-xs">
                                    {problem.language}
                                </Badge>
                                <Badge variant="secondary" className="bg-[#3D3D3D]/50 text-white/70 text-xs">
                                    Runtime:{problem.runtime}
                                </Badge>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default RecProblem