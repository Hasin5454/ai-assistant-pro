import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class GeminiService {
  private ai: GoogleGenerativeAI;
  private model: string;

  constructor() {
    this.ai = new GoogleGenerativeAI(process.env.GEMINI_KEY);
    this.model = 'gemini-1.5-pro';
  }

  async generateContent(prompt: string) {
    const model = this.ai.getGenerativeModel({ 
      model: this.model,
      generationConfig: {
        maxOutputTokens: 2048,
      }
    });
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  }
}
