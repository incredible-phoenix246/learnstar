import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const runtime = "edge";

export async function POST(req: Request) {
    const { messages }: { messages: CoreMessage[] } = await req.json();

    const result = streamText({
        model: openai("gpt-4"),
        system: `You are an expert teacher and curriculum developer. Create a detailed lesson note following this structure:
        1. Topic Overview
        2. Learning Objectives
        3. Key Concepts
        4. Teaching Methods
        5. Activities
        6. Assessment Methods
        7. Resources Needed
        Make it appropriate for the specified grade level and subject.`,
        messages,
    });

    return result.toDataStreamResponse();
}
