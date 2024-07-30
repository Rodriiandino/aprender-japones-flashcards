import { streamText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { NextResponse } from 'next/server'

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: 'https://api.groq.com/openai/v1'
})
const model = groq('llama3-8b-8192')

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = await streamText({
      model,
      messages,
      maxTokens: 500,
      temperature: 0.7,
      topP: 1
    })

    if (!result) {
      throw new Error('Failed to generate text')
    }

    return result.toAIStreamResponse()
  } catch (error) {
    console.error(error)
    return NextResponse.error()
  }
}
