interface FetchApiAiProps {
  character: string
  type: 'example' | 'hint'
  token: string
  provider: 'openai' | 'groq'
  lastResult?: string
  language?: 'en' | 'es'
}

const PROMPTS = {
  en: {
    example: (character: string) => `
      Generate a word using the Japanese character "${character}".
      - If it's hiragana, provide a word typically written in hiragana in everyday Japanese.
      - If it's katakana, provide a word commonly written in katakana (e.g., foreign loanwords, technical terms, or emphatic expressions).
      Respond strictly in this format:
      "Japanese word in katakana/hiragana (romaji) - English translation".
      Do not include any additional text or explanations.
      
      Examples:
      - For hiragana: "ありがとう (arigatou) - Thank you".
      - For hiragana: "いえ (ie) - House".
      - For hiragana: "うみ (umi) - Sea".
      - For katakana: "コーヒー (koohii) - Coffee".
      - For katakana: "テレビ (terebi) - Television".
      - For katakana: "ゲーム (geemu) - Game".
    `,
    hint: (character: string) => `
      Create a clever and creative mnemonic hint for the Japanese character "${character}" to help remember its romaji transliteration.
      Follow these rules:
      1. Avoid directly mentioning the romaji or sound of the character.
      2. Reference a word, concept, or mnemonic device that indirectly relates to the character's sound.
      3. Make the hint challenging but solvable, encouraging thoughtful engagement.
      4. Include a Japanese word containing the character without highlighting its position.
      
      Respond strictly in this format:
      "Hint for ${character}: [Your hint here]. This character appears in the word [Japanese word] ([English translation])."
      Do not include any additional text or explanations.
      
      Examples:
      - For 'あ': "Hint for あ: The sound of realization when something clicks. This character appears in the word あたま (head)."
      - For 'い': "Hint for い: The sound you make when hesitating. This character appears in the word いぬ (dog)."
      - For 'う': "Hint for う: The low hum of agreement. This character appears in the word うみ (sea)."
      - For 'え': "Hint for え: The exclamation of surprise at a plot twist. This character appears in the word えき (station)."
      - For 'お': "Hint for お: The polite tone of gratitude. This character appears in the word おにぎり (rice ball)."
      - For 'カ': "Hint for カ: The sharp snap of a camera shutter. This character appears in the word カメラ (camera)."
      - For 'サ': "Hint for サ: The hiss of a snake in tall grass. This character appears in the word サボテン (cactus)."
    `
  },
  es: {
    example: (character: string) => `
      Genera una palabra usando el carácter japonés "${character}".
      - Si es hiragana, proporciona una palabra típicamente escrita en hiragana en el japonés cotidiano.
      - Si es katakana, proporciona una palabra comúnmente escrita en katakana (por ejemplo, préstamos de palabras extranjeras, términos técnicos o expresiones enfáticas).
      Responde estrictamente en este formato:
      "Palabra japonesa en katakana/hiragana (romaji) - Traducción al Español".
      No incluyas texto adicional ni explicaciones.
      
      Ejemplos:
      - Para hiragana: "ありがとう (arigatou) - Gracias".
      - Para hiragana: "いえ (ie) - Casa".
      - Para hiragana: "うみ (umi) - Mar".
      - Para katakana: "コーヒー (koohii) - Café".
      - Para katakana: "テレビ (terebi) - Televisión".
      - Para katakana: "ゲーム (geemu) - Juego".
      - Para katakana: "アイスクリーム (aisukuriimu) - Helado".
    `,
    hint: (character: string) => `
      Crea una pista ingeniosa y creativa para el carácter japonés "${character}" que ayude a recordar su transliteración en romaji.
      Sigue estas reglas:
      1. Evita mencionar directamente el romaji o el sonido del carácter.
      2. Haz referencia a una palabra, concepto o recurso mnemotécnico que se relacione indirectamente con el sonido del carácter.
      3. Haz que la pista sea desafiante pero resoluble, fomentando un pensamiento reflexivo.
      4. Incluye una palabra japonesa que contenga el carácter sin destacar su posición.
      
      Responde estrictamente en este formato:
      "Pista para ${character}: [Tu pista aquí]. Este carácter aparece en la palabra [palabra japonesa] ([traducción al Español])."
      No incluyas texto adicional ni explicaciones.
      
      Ejemplos:
      - Para 'あ': "Pista para あ: El sonido que haces al darte cuenta de algo importante. Este carácter aparece en la palabra あたま (cabeza)."
      - Para 'い': "Pista para い: El murmullo de indecisión. Este carácter aparece en la palabra いぬ (perro)."
      - Para 'う': "Pista para う: El zumbido bajo de acuerdo. Este carácter aparece en la palabra うみ (mar)."
      - Para 'え': "Pista para え: La exclamación de asombro ante un giro inesperado. Este carácter aparece en la palabra えき (estación)."
      - Para 'お': "Pista para お: El tono cortés de gratitud. Este carácter aparece en la palabra おにぎり (bollo de arroz)."
      - Para 'カ': "Pista para カ: El chasquido agudo de un obturador de cámara. Este carácter aparece en la palabra カメラ (cámara)."
      - Para 'サ': "Pista para サ: El siseo de una serpiente en la hierba alta. Este carácter aparece en la palabra サボテン (cactus)."
      - Para 'タ': "Pista para タ: El golpe firme de un martillo sobre una tabla. Este carácter aparece en la palabra タワー (torre)."
    `
  }
}

function getPrompt({
  type,
  character,
  language = 'en',
  lastResult
}: FetchApiAiProps): string {
  const basePrompt = PROMPTS[language][type](character)

  if (lastResult) {
    const additionalPrompt =
      language === 'es'
        ? `\nEl resultado previo fue: "${lastResult}". Proporciona un ${type} diferente para el mismo carácter "${character}".`
        : `\nThe previous result was: "${lastResult}". Please provide a different ${type} this time with the same character "${character}".`
    return basePrompt + additionalPrompt
  }

  return basePrompt
}

export async function fetchApiAi({
  character,
  type,
  token,
  provider,
  lastResult,
  language = 'en'
}: FetchApiAiProps) {
  try {
    const prompt = getPrompt({
      character,
      type,
      token,
      provider,
      lastResult,
      language
    })

    console.log('Prompt:', prompt)

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
      throw new Error(errorResponse?.message || 'API call failed')
    }

    const { result } = await res.json()
    return result
  } catch (error) {
    console.error('API call failed:', error)
    throw error
  }
}
