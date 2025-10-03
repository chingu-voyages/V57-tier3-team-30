// app/api/chat/route.ts
import { NextResponse } from "next/server";
import {GoogleGenAI} from '@google/genai';
import {appInfo} from '@/app/data/appInfo';

const genAI = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
});

export default async function POST(msg: string) {
  const systemPrompt = `
    You are a helpful assistant for an application called MergeBoard. 
    Your purpose is to answer questions about MergeBoard, managing GitHub pull requests, and general software development collaboration.
    
    Here is some information about the MergeBoard application:
    ---
    ${appInfo}
    ---
    
    Based on this context, please answer the user's question. 
    If the question is unrelated to MergeBoard, GitHub, or software development, politely decline and state that you can only answer questions about those topics.
  `;

  const fullPrompt = `${systemPrompt}\n\nUser Question: ${msg}`;

  try {
    const response = await genAI.models.generateContent({ model: "gemini-2.0-flash-001", contents: fullPrompt, });
    return NextResponse.json({ reply: response.text });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
