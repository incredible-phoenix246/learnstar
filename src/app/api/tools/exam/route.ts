import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const runtime = "edge";

export async function POST(req: Request) {
    const { messages }: { messages: CoreMessage[] } = await req.json();

    const result = streamText({
        model: openai("gpt-4"),
        system: `You are an expert assessment creator. Generate assessment questions that:
        1. Are aligned with learning objectives
        2. Include a mix of question types (MCQ, short answer, etc.)
        3. Have clear marking criteria
        4. Are grade-level appropriate
        5. Include answers and explanations
        Format the output clearly with numbered questions.`,
        messages,
    });

    return result.toDataStreamResponse();
}
