import { NextResponse } from "next/server"

export const runtime = "edge";

export async function POST(req: Request) {
    const { className } = await req.json()

    // In a real application, you would integrate with a video conferencing API
    // For this example, we'll generate a mock classroom link
    const classLink = `https://learnstar.ai/virtual-classroom/${encodeURIComponent(className)}`

    // Here you would typically save the classroom details to a database

    return NextResponse.json({ classLink })
}

