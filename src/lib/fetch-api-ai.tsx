interface FetchApiAiProps {
  character: string
  type: 'example' | 'hint'
  token: string
  provider: 'openai' | 'groq'
  lastResult?: string
}

export async function fetchApiAi({
  character,
  type,
  token,
  provider,
  lastResult
}: FetchApiAiProps) {
  const examplePrompt = `Generate a word using the Japanese character "${character}".
    If it's hiragana, the word should typically be written in hiragana in everyday Japanese.
    If it's katakana, the word should be one that is commonly written in katakana (like foreign loanwords, emphatic expressions, or technical terms).
    Provide the word, its romaji transliteration, and English translation in this format:
    "Japanese word in katakana or hiragana (romaji) - English translation".
    Only respond in this format and provide no additional text.
    Example of a correct response for hiragana: "ありがとう (arigatou) - Thank you".
    Example of a correct response for katakana: "コーヒー (koohii) - Coffee".`

  const hintPrompt = `For the Japanese character "${character}", create a clever hint that helps remember its romaji transliteration without directly revealing it.
    The hint should:
    1. Not mention the actual romaji or sound directly.
    2. Reference a word, concept, or mnemonic device that indirectly relates to the character's sound.
    3. Be challenging enough to make the user think, but not so obscure that it's unhelpful.
    4. Include a Japanese word that contains the character, but don't highlight where the character appears in the word.
    
    Provide the hint in this format: "Hint for ${character}: [Your hint here]. This character appears in the word [Japanese word] ([English translation])."
    Only respond in this format and provide no additional text.
    
    Examples of good hints:
    - For 'あ': "Hint for あ: The first sound you make when surprised. This character appears in the word あたま (head)."
    - For 'き': "Hint for き: The sound a key makes in a lock. This character appears in the word きもの (kimono)."
    - For 'す': "Hint for す: The noise you make to shush someone. This character appears in the word すし (sushi)."
    
    Remember, the goal is to help the user recall the sound, not to give it away directly. The example word should not make the character's sound too obvious.`

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
        token,
        provider
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
