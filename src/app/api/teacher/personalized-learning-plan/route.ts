import { NextResponse } from "next/server"
import { Configuration, OpenAIApi } from "openai-edge"

export const runtime = "edge";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export async function POST(req: Request) {
    const { studentName, gradeLevel, subjects, learningStyle } = await req.json()

    const prompt = `Create a personalized learning plan for a student with the following details:
  Student Name: ${studentName}
  Grade Level: ${gradeLevel}
  Subjects: ${subjects}
  Learning Style and Preferences: ${learningStyle}

  Please provide a detailed plan that includes:
  1. Learning objectives for each subject
  2. Recommended study strategies based on the student's learning style
  3. Suggested resources and materials
  4. A weekly schedule for studying and practice
  5. Methods for tracking progress and self-assessment`

    try {
        const response = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
        })

        const data = await response.json()
        const plan = data.choices[0].message.content

        return NextResponse.json({ plan })
    } catch (error) {
        console.error("Error generating personalized learning plan:", error)
        return NextResponse.json({ error: "Failed to generate learning plan" }, { status: 500 })
    }
}

