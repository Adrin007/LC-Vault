"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig
interface dataprops {

    totalSolved: number,
    easySolved: number,
    mediumSolved: number,
    hardSolved: number,
}
export function RadialChart({ totalSolved, easySolved, mediumSolved, hardSolved }: dataprops) {
    const chartData = [
        { difficulty: "Easy", problems: easySolved, fill: "#15B392" },
        { difficulty: "Medium", problems: mediumSolved, fill: "#ffb700" },
        { difficulty: "Hard", problems: hardSolved, fill: "#f63737" },
    ]

    return (
        <Card className="flex flex-row py-3 bg-[#3D3D3D]/30 border-0 justify-center items-center">
            <div className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[200px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="problems"
                            nameKey="difficulty"
                            innerRadius={60}
                            strokeWidth={3}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    fontSize="2rem" 
                                                    fontWeight="bold"
                                                    fill="rgba(255, 255, 255, 0.8)"
                                                >
                                                    {totalSolved}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    fontWeight="bold"
                                                    fill="gray"
                                                >
                                                    Solved
                                                </tspan>
                                            </text>

                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </div>
            <div className="flex justify-center mr-11">
                <div className="flex flex-col gap-3 w-full">
                    <div className="flex flex-row gap-2 items-center"> 
                        <div className="w-2 h-2 rounded-full bg-[#15B392]"/>
                        <h1 className="text-white/60 text-sm font-semibold">Easy</h1>
                    </div>
                    <div className="flex flex-row gap-2 items-center"> 
                        <div className="w-2 h-2 rounded-full bg-[#ffb700]"/>
                        <h1 className="text-white/60 text-sm font-semibold">Medium</h1>
                    </div>
                    <div className="flex flex-row gap-2 items-center"> 
                        <div className="w-2 h-2 rounded-full bg-[#f63737]"/>
                        <h1 className="text-white/60 text-sm font-semibold">Hard</h1>
                    </div>
                </div>
            </div>
        </Card>
    )
}
