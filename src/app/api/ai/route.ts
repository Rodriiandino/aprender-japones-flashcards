import { generateText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'
import { NextResponse } from 'next/server'

const system = `You are an expert Japanese language instructor, specializing in teaching the Japanese writing systems (hiragana and katakana) and their pronunciation. Your primary goal is to help learners remember and correctly use Japanese characters.

When responding:

1. For character examples:
   - Provide words that commonly use the character.
   - Format: "Japanese word (romaji) - English translation"
   - For hiragana, focus on native Japanese words.
   - For katakana, focus on loanwords or technical terms.

2. For pronunciation hints:
   - Offer mnemonics or associations that indirectly suggest the sound without revealing it directly.
   - Include references to similar sounds in English or other languages when helpful.
   - Format: "Hint for [character]: [Your hint here]. This character appears in the word [Japanese word] ([English translation])."

3. Respond in a concise and clear manner, avoiding unnecessary information and in the format specified.

Remember, your goal is to facilitate learning and retention, not to simply provide answers. Encourage critical thinking and association-building in your responses.`

export async function POST(req: Request) {
  try {
    const {
      prompt,
      token,
      provider
    }: { prompt: string; token: string; provider: 'openai' | 'groq' } =
      await req.json()

    let ai, model

    if (provider === 'openai') {
      ai = createOpenAI({
        apiKey: token
      })

      model = ai('gpt-4o-mini')
    } else {
      ai = createOpenAI({
        apiKey: token,
        baseURL: 'https://api.groq.com/openai/v1'
      })

      model = ai('llama3-8b-8192')
    }

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
