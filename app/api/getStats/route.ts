/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server"
import axios from "axios"

export async function GET(req: NextRequest) {
    const username = "Adrin_Bilinr"
    try {
        const statsQuery = {
            query:
                `{
                    matchedUser(username: "${username}") {
                            submitStatsGlobal {
                            acSubmissionNum {
                                difficulty
                                count
                            }
                        }
                    }
                }`
        }
        const response = await axios.post("https://leetcode.com/graphql", statsQuery)
        const data = response.data.data
        const acSubmissionNum = data.matchedUser.submitStatsGlobal.acSubmissionNum
        const totalSolved = acSubmissionNum.find((d: { difficulty: string }) => d.difficulty === "All")?.count || 0
        const easySolved = acSubmissionNum.find((d: { difficulty: string }) => d.difficulty === "Easy")?.count || 0
        const mediumSolved = acSubmissionNum.find((d: { difficulty: string }) => d.difficulty === "Medium")?.count || 0
       const hardSolved = acSubmissionNum.find((d:{ difficulty: string }) => d.difficulty === "Hard")?.count || 0
        const leetcodeStats = {
            totalSolved,
            easySolved,
            mediumSolved,
            hardSolved
        }
        return NextResponse.json({ data: leetcodeStats})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Unable to fetch statsData" })
    }

}