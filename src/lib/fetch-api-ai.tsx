export async function fetchApiAi(
  character: string,
  type: 'example' | 'hint',
  token: string,
  lastResult?: string
) {
  const examplePrompt = `Create a word using the character ${character}, 
    provide its romaji transliteration and English translation in the format: 
    "Japanese word (romaji) - English translation". 
    Only respond in this format and provide no additional text.
    Example of a correct response: "こんにちは (konnichiwa) - Hello".`

  const hintPrompt = `For the character ${character}, generate a hint to help remember its romaji transliteration. 
    Provide the hint in this format: "Remember that ${character} appears in basic words like ...". 
    Only respond in this format and provide no additional text. 
    Example of a correct response: "Remember that ${character} appears in basic words like こんにちは (konnichiwa)".`

  let prompt = type === 'example' ? examplePrompt : hintPrompt

  if (lastResult) {
    prompt += `\nThe previous result was: "${lastResult}". Please provide a different ${type} this time with the same character "${character}".`
  }

  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt,
        token
      })
    })

    if (!res.ok) {
      const errorResponse = await res.json()
      throw new Error(errorResponse || 'API call failed')
    }

    const { result } = await res.json()
    return result
  } catch (error) {
    console.error('API call failed:', error)
    throw error
  }
}
