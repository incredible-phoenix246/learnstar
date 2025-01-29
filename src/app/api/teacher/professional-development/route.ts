import { NextResponse } from "next/server"
import { Configuration, OpenAIApi } from "openai-edge"

export const runtime = "edge";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export async function POST(req: Request) {
    const { teacherName, subjects, experience, goals } = await req.json()

    const prompt = `Create a professional development plan for a teacher with the following details:
  Teacher Name: ${teacherName}
  Subjects Taught: ${subjects}
  Years of Experience: ${experience}
  Professional Development Goals: ${goals}

  Please provide a detailed plan that includes:
  1. Recommended courses or workshops aligned with the teacher's goals
  2. Suggested books, articles, or online resources for self-study
  3. Potential mentorship or peer collaboration opportunities
  4. Conferences or seminars relevant to the teacher's subjects and goals
  5. A timeline for achieving specific milestones
  6. Methods for measuring progress and impact on teaching practice`

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
        })

        const data = await response.json()
        const plan = data.choices[0].message.content

        return NextResponse.json({ plan })
    } catch (error) {
        console.error("Error generating professional development plan:", error)
        return NextResponse.json({ error: "Failed to generate development plan" }, { status: 500 })
    }
}

