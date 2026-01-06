// 'use server'
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// export async function askAI(userMsg: string, resumeData: any) {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const prompt = `System: You are an AI Portfolio Agent for Abdus Satter.
//     Use this data: ${JSON.stringify(resumeData)}.
//     Style: Technical, Industrial, concise.
//     User Query: ${userMsg}`;

//     const result = await model.generateContent(prompt);
//     return result.response.text();
//   } catch (error) {
//     return "ERROR: AI SUBSYSTEM UNREACHABLE.";
//   }
// }
