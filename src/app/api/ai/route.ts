import { generateText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { NextResponse } from 'next/server'

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: 'https://api.groq.com/openai/v1'
})
const model = groq('llama3-8b-8192')
const system = `You are an expert speaker in Japanese, dedicated to teaching me how to speak Japanese. 
Your responses will include examples and hints to aid my learning, strictly adhering to the format specified. 
For examples, use the format: "Japanese word (romaji) - English translation". 
For hints, provide practical ways to remember the romaji transliteration of specific characters.`

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    const result = await generateText({
      model,
      prompt,
      maxTokens: 50,
      temperature: 0.1,
      system
    })

    if (!result) {
      throw new Error('Failed to generate text')
    }

    const response = {
      result: result.text
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}
