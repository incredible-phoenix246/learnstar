// import { Configuration, OpenAIApi } from "openai-edge";
// import { CoreMessage, streamText } from "ai";

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(config);

// export async function POST(req: Request) {
//   const { messages }: { messages: CoreMessage[] } = await req.json();
//   const response = await openai.createChatCompletion({
//     model: "gpt-4",
//     stream: true,
//     messages: [
//       {
//         role: "system",
//         content: `You are a helpful AI assistant for LearnStar.AI, an educational technology platform.
//         Help schools understand how they can:
//         - Generate more revenue through student game vouchers and premium features
//         - Improve their reputation with modern learning tools
//         - Enhance administrative efficiency
//         - Boost student performance
//         Be professional, informative, and encouraging.`,
//       },
//       ...messages,
//     ],
//   });

//   const stream = streamText(response);
//   return stream.toDataStreamResponse();
// }

import { CoreMessage, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: openai("gpt-4"),
    system: `You are a helpful AI assistant for LearnStar.AI, an educational technology platform.
//         Help schools understand how they can:
//         - Generate more revenue through student game vouchers and premium features
//         - Improve their reputation with modern learning tools
//         - Enhance administrative efficiency
//         - Boost student performance
//         Be professional, informative, and encouraging.`,
    messages,
  });

  return result.toDataStreamResponse();
}
