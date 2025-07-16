
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  const { prompt, model } = await req.json();
  
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY!);
  const genModel = genAI.getGenerativeModel({ model });
  
  const result = await genModel.generateContent({
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  return Response.json({
    content: (await result.response).text(),
    model: model
  });
}
