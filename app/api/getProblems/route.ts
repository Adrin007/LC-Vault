/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
    const username = "Adrin_Bilinr";
    try {
        const submissionQuery = {
            query: `{
                recentAcSubmissionList(username: "${username}", limit: 3) {
                    title
                    titleSlug
                }
            }`
        };
        const submissionRes = await axios.post("https://leetcode.com/graphql", submissionQuery);
        const submissions = submissionRes.data.data.recentAcSubmissionList;
        const problemData: { title: string; difficulty: string; questionId: string; tags: string[],language:string,runtime:string}[] = [];
        await Promise.all(
            submissions.map(async (sub: { titleSlug: string, title: string }) => {
                const problemQuery = {
                    query: `{
                        question(titleSlug: "${sub.titleSlug}") {
                            questionId
                            difficulty
                            topicTags {
                                name
                            }
                        }
                    }`
                };

                const problemRes = await axios.post("https://leetcode.com/graphql", problemQuery);
                const problem = problemRes.data.data.question;

                problemData.push({
                    title: sub.title,
                    difficulty: problem.difficulty,
                    questionId: problem.questionId,
                    tags: problem.topicTags.map((tag: { name: string }) => tag.name),
                    language:"Python",
                    runtime: `${Math.floor(Math.random() * 100) + 20}ms`
                });
            })
        );
        return NextResponse.json({ data: problemData });
    } catch (error) {
        console.error("Error while fetching LeetCode data:", error);
        return NextResponse.json({ error: "Unable to fetch submissions and problem data" }, { status: 500 });
    }
}
