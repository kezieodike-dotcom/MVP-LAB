
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const generateFeasibilityReport = async (idea: string) => {
  if (!API_KEY) return "API Key not configured. Please ensure it is set in environment.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the feasibility of this venture idea: "${idea}". Provide a structured report including: Market Potential, Technical Complexity, and Estimated Time to MVP.`,
    config: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    },
  });

  return response.text;
};

export const chatWithAssistant = async (message: string, context?: string) => {
  if (!API_KEY) return "API Key not configured.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are the MVP Lab AI Assistant. You help users manage their ventures, understand their investments, and provide insights based on the platform ecosystem. Keep responses professional, encouraging, and concise.',
    },
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};
