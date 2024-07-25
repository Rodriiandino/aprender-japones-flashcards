import { generateText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { NextResponse } from 'next/server'

const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY!,
  baseURL: 'https://api.groq.com/openai/v1'
})

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json()

    const model = groq('llama3-8b-8192')

    const result = await generateText({
      model,
      prompt,
      maxTokens: 50,
      temperature: 0.1,
      system:
        'You are a expert speaker in japanese, and you are teaching me how to speak japanese'
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
