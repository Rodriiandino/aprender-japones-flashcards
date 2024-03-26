export type CharacterType = {
  hiragana: string
  katakana: string
  romaji: string | string[]
}

export const AllCharactersGroup: {
  [group: string]: { [key: string]: { [key: string]: CharacterType } }
} = {
  voicedConsonants: {
    vowels: {
      a: {
        hiragana: 'あ',
        katakana: 'ア',
        romaji: 'a'
      },
      i: {
        hiragana: 'い',
        katakana: 'イ',
        romaji: 'i'
      },
      u: {
        hiragana: 'う',
        katakana: 'ウ',
        romaji: 'u'
      },
      e: {
        hiragana: 'え',
        katakana: 'エ',
        romaji: 'e'
      },
      o: {
        hiragana: 'お',
        katakana: 'オ',
        romaji: 'o'
      }
    },
    k: {
      ka: {
        hiragana: 'か',
        katakana: 'カ',
        romaji: 'ka'
      },
      ki: {
        hiragana: 'き',
        katakana: 'キ',
        romaji: 'ki'
      },
      ku: {
        hiragana: 'く',
        katakana: 'ク',
        romaji: 'ku'
      },
      ke: {
        hiragana: 'け',
        katakana: 'ケ',
        romaji: 'ke'
      },
      ko: {
        hiragana: 'こ',
        katakana: 'コ',
        romaji: 'ko'
      }
    },
    s: {
      sa: {
        hiragana: 'さ',
        katakana: 'サ',
        romaji: 'sa'
      },
      si_shi: {
        hiragana: 'し',
        katakana: 'シ',
        romaji: ['shi', 'si']
      },
      su: {
        hiragana: 'す',
        katakana: 'ス',
        romaji: 'su'
      },
      se: {
        hiragana: 'せ',
        katakana: 'セ',
        romaji: 'se'
      },
      so: {
        hiragana: 'そ',
        katakana: 'ソ',
        romaji: 'so'
      }
    },
    t: {
      ta: {
        hiragana: 'た',
        katakana: 'タ',
        romaji: 'ta'
      },
      ti_chi: {
        hiragana: 'ち',
        katakana: 'チ',
        romaji: ['chi', 'ti']
      },
      tu_tsu: {
        hiragana: 'つ',
        katakana: 'ツ',
        romaji: ['tsu', 'tu']
      },
      te: {
        hiragana: 'て',
        katakana: 'テ',
        romaji: 'te'
      },
      to: {
        hiragana: 'と',
        katakana: 'ト',
        romaji: 'to'
      }
    },
    n: {
      na: {
        hiragana: 'な',
        katakana: 'ナ',
        romaji: 'na'
      },
      ni: {
        hiragana: 'に',
        katakana: 'ニ',
        romaji: 'ni'
      },
      nu: {
        hiragana: 'ぬ',
        katakana: 'ヌ',
        romaji: 'nu'
      },
      ne: {
        hiragana: 'ね',
        katakana: 'ネ',
        romaji: 'ne'
      },
      no: {
        hiragana: 'の',
        katakana: 'ノ',
        romaji: 'no'
      }
    },
    h: {
      ha: {
        hiragana: 'は',
        katakana: 'ハ',
        romaji: 'ha'
      },
      hi: {
        hiragana: 'ひ',
        katakana: 'ヒ',
        romaji: 'hi'
      },
      hu_fu: {
        hiragana: 'ふ',
        katakana: 'フ',
        romaji: ['fu', 'hu']
      },
      he: {
        hiragana: 'へ',
        katakana: 'ヘ',
        romaji: 'he'
      },
      ho: {
        hiragana: 'ほ',
        katakana: 'ホ',
        romaji: 'ho'
      }
    },
    m: {
      ma: {
        hiragana: 'ま',
        katakana: 'マ',
        romaji: 'ma'
      },
      mi: {
        hiragana: 'み',
        katakana: 'ミ',
        romaji: 'mi'
      },
      mu: {
        hiragana: 'む',
        katakana: 'ム',
        romaji: 'mu'
      },
      me: {
        hiragana: 'め',
        katakana: 'メ',
        romaji: 'me'
      },
      mo: {
        hiragana: 'も',
        katakana: 'モ',
        romaji: 'mo'
      }
    },
    y: {
      ya: {
        hiragana: 'や',
        katakana: 'ヤ',
        romaji: 'ya'
      },
      yu: {
        hiragana: 'ゆ',
        katakana: 'ユ',
        romaji: 'yu'
      },
      yo: {
        hiragana: 'よ',
        katakana: 'ヨ',
        romaji: 'yo'
      }
    },
    r: {
      ra: {
        hiragana: 'ら',
        katakana: 'ラ',
        romaji: 'ra'
      },
      ri: {
        hiragana: 'り',
        katakana: 'リ',
        romaji: 'ri'
      },
      ru: {
        hiragana: 'る',
        katakana: 'ル',
        romaji: 'ru'
      },
      re: {
        hiragana: 'れ',
        katakana: 'レ',
        romaji: 're'
      },
      ro: {
        hiragana: 'ろ',
        katakana: 'ロ',
        romaji: 'ro'
      }
    },
    w: {
      wa: {
        hiragana: 'わ',
        katakana: 'ワ',
        romaji: 'wa'
      },
      wo: {
        hiragana: 'を',
        katakana: 'ヲ',
        romaji: 'wo'
      }
    },
    special: {
      n: {
        hiragana: 'ん',
        katakana: 'ン',
        romaji: 'n'
      }
    },
    g: {
      ga: {
        hiragana: 'が',
        katakana: 'ガ',
        romaji: 'ga'
      },
      gi: {
        hiragana: 'ぎ',
        katakana: 'ギ',
        romaji: 'gi'
      },
      gu: {
        hiragana: 'ぐ',
        katakana: 'グ',
        romaji: 'gu'
      },
      ge: {
        hiragana: 'げ',
        katakana: 'ゲ',
        romaji: 'ge'
      },
      go: {
        hiragana: 'ご',
        katakana: 'ゴ',
        romaji: 'go'
      }
    },
    z: {
      za: {
        hiragana: 'ざ',
        katakana: 'ザ',
        romaji: 'za'
      },
      zi_ji: {
        hiragana: 'じ',
        katakana: 'ジ',
        romaji: ['ji', 'zi']
      },
      zu: {
        hiragana: 'ず',
        katakana: 'ズ',
        romaji: 'zu'
      },
      ze: {
        hiragana: 'ぜ',
        katakana: 'ゼ',
        romaji: 'ze'
      },
      zo: {
        hiragana: 'ぞ',
        katakana: 'ゾ',
        romaji: 'zo'
      }
    },
    d: {
      da: {
        hiragana: 'だ',
        katakana: 'ダ',
        romaji: 'da'
      },
      di: {
        hiragana: 'ぢ',
        katakana: 'ヂ',
        romaji: ['di', 'ji', 'dji', 'dzi']
      },
      du: {
        hiragana: 'づ',
        katakana: 'ヅ',
        romaji: ['du', 'zu', 'dzu']
      },
      de: {
        hiragana: 'で',
        katakana: 'デ',
        romaji: 'de'
      },
      do: {
        hiragana: 'ど',
        katakana: 'ド',
        romaji: 'do'
      }
    },
    b: {
      ba: {
        hiragana: 'ば',
        katakana: 'バ',
        romaji: 'ba'
      },
      bi: {
        hiragana: 'び',
        katakana: 'ビ',
        romaji: 'bi'
      },
      bu: {
        hiragana: 'ぶ',
        katakana: 'ブ',
        romaji: 'bu'
      },
      be: {
        hiragana: 'べ',
        katakana: 'ベ',
        romaji: 'be'
      },
      bo: {
        hiragana: 'ぼ',
        katakana: 'ボ',
        romaji: 'bo'
      }
    },
    p: {
      pa: {
        hiragana: 'ぱ',
        katakana: 'パ',
        romaji: 'pa'
      },
      pi: {
        hiragana: 'ぴ',
        katakana: 'ピ',
        romaji: 'pi'
      },
      pu: {
        hiragana: 'ぷ',
        katakana: 'プ',
        romaji: 'pu'
      },
      pe: {
        hiragana: 'ぺ',
        katakana: 'ペ',
        romaji: 'pe'
      },
      po: {
        hiragana: 'ぽ',
        katakana: 'ポ',
        romaji: 'po'
      }
    }
  },
  palatalizedConsonants: {
    k_special: {
      kya: {
        hiragana: 'きゃ',
        katakana: 'キャ',
        romaji: 'kya'
      },
      kyu: {
        hiragana: 'きゅ',
        katakana: 'キュ',
        romaji: 'kyu'
      },
      kyo: {
        hiragana: 'きょ',
        katakana: 'キョ',
        romaji: 'kyo'
      }
    },
    s_special: {
      sya: {
        hiragana: 'しゃ',
        katakana: 'シャ',
        romaji: ['sha', 'sya']
      },
      syu: {
        hiragana: 'しゅ',
        katakana: 'シュ',
        romaji: ['shu', 'syu']
      },
      syo: {
        hiragana: 'しょ',
        katakana: 'ショ',
        romaji: ['sho', 'syo']
      }
    },
    t_special: {
      tya: {
        hiragana: 'ちゃ',
        katakana: 'チャ',
        romaji: ['cha', 'tya']
      },
      tyu: {
        hiragana: 'ちゅ',
        katakana: 'チュ',
        romaji: ['chu', 'tyu']
      },
      tyo: {
        hiragana: 'ちょ',
        katakana: 'チョ',
        romaji: ['cho', 'tyo']
      }
    },
    n_special: {
      nya: {
        hiragana: 'にゃ',
        katakana: 'ニャ',
        romaji: 'nya'
      },
      nyu: {
        hiragana: 'にゅ',
        katakana: 'ニュ',
        romaji: 'nyu'
      },
      nyo: {
        hiragana: 'にょ',
        katakana: 'ニョ',
        romaji: 'nyo'
      }
    },
    h_special: {
      hya: {
        hiragana: 'ひゃ',
        katakana: 'ヒャ',
        romaji: 'hya'
      },
      hyu: {
        hiragana: 'ひゅ',
        katakana: 'ヒュ',
        romaji: 'hyu'
      },
      hyo: {
        hiragana: 'ひょ',
        katakana: 'ヒョ',
        romaji: 'hyo'
      }
    },
    m_special: {
      mya: {
        hiragana: 'みゃ',
        katakana: 'ミャ',
        romaji: 'mya'
      },
      myu: {
        hiragana: 'みゅ',
        katakana: 'ミュ',
        romaji: 'myu'
      },
      myo: {
        hiragana: 'みょ',
        katakana: 'ミョ',
        romaji: 'myo'
      }
    },
    r_special: {
      rya: {
        hiragana: 'りゃ',
        katakana: 'リャ',
        romaji: 'rya'
      },
      ryu: {
        hiragana: 'りゅ',
        katakana: 'リュ',
        romaji: 'ryu'
      },
      ryo: {
        hiragana: 'りょ',
        katakana: 'リョ',
        romaji: 'ryo'
      }
    },
    g_special: {
      gya: {
        hiragana: 'ぎゃ',
        katakana: 'ギャ',
        romaji: 'gya'
      },
      gyu: {
        hiragana: 'ぎゅ',
        katakana: 'ギュ',
        romaji: 'gyu'
      },
      gyo: {
        hiragana: 'ぎょ',
        katakana: 'ギョ',
        romaji: 'gyo'
      }
    },
    z_special: {
      zya: {
        hiragana: 'じゃ',
        katakana: 'ジャ',
        romaji: ['ja', 'zya']
      },
      zyu: {
        hiragana: 'じゅ',
        katakana: 'ジュ',
        romaji: ['ju', 'zyu']
      },
      zyo: {
        hiragana: 'じょ',
        katakana: 'ジョ',
        romaji: ['jo', 'zyo']
      }
    },
    b_special: {
      bya: {
        hiragana: 'びゃ',
        katakana: 'ビャ',
        romaji: 'bya'
      },
      byu: {
        hiragana: 'びゅ',
        katakana: 'ビュ',
        romaji: 'byu'
      },
      byo: {
        hiragana: 'びょ',
        katakana: 'ビョ',
        romaji: 'byo'
      }
    },
    p_special: {
      pya: {
        hiragana: 'ぴゃ',
        katakana: 'ピャ',
        romaji: 'pya'
      },
      pyu: {
        hiragana: 'ぴゅ',
        katakana: 'ピュ',
        romaji: 'pyu'
      },
      pyo: {
        hiragana: 'ぴょ',
        katakana: 'ピョ',
        romaji: 'pyo'
      }
    },
    d_special: {
      dya: {
        hiragana: 'ぢゃ',
        katakana: 'ヂャ',
        romaji: ['dya', 'ja', 'dja']
      },
      dyu: {
        hiragana: 'ぢゅ',
        katakana: 'ヂュ',
        romaji: ['dyu', 'ju', 'dju']
      },
      dyo: {
        hiragana: 'ぢょ',
        katakana: 'ヂョ',
        romaji: ['dyo', 'jo', 'djo']
      }
    }
  }
}

export type AllCharactersType = {
  [key: string]: string | [string[], string]
}

export const AllHiraganaCharacters: AllCharactersType = {
  a: 'あ',
  i: 'い',
  u: 'う',
  e: 'え',
  o: 'お',
  ka: 'か',
  ki: 'き',
  ku: 'く',
  ke: 'け',
  ko: 'こ',
  sa: 'さ',
  si_shi: [['shi', 'si'], 'し'],
  su: 'す',
  se: 'せ',
  so: 'そ',
  ta: 'た',
  ti_chi: [['chi', 'ti'], 'ち'],
  tu_tsu: [['tsu', 'tu'], 'つ'],
  te: 'て',
  to: 'と',
  na: 'な',
  ni: 'に',
  nu: 'ぬ',
  ne: 'ね',
  no: 'の',
  ha: 'は',
  hi: 'ひ',
  hu_fu: [['fu', 'hu'], 'ふ'],
  he: 'へ',
  ho: 'ほ',
  ma: 'ま',
  mi: 'み',
  mu: 'む',
  me: 'め',
  mo: 'も',
  ya: 'や',
  yu: 'ゆ',
  yo: 'よ',
  ra: 'ら',
  ri: 'り',
  ru: 'る',
  re: 'れ',
  ro: 'ろ',
  wa: 'わ',
  wo: 'を',
  n: 'ん',
  ga: 'が',
  gi: 'ぎ',
  gu: 'ぐ',
  ge: 'げ',
  go: 'ご',
  za: 'ざ',
  zi_ji: [['ji', 'zi'], 'じ'],
  zu: 'ず',
  ze: 'ぜ',
  zo: 'ぞ',
  da: 'だ',
  di: [['di', 'ji', 'dji', 'dzi'], 'ぢ'],
  du: [['du', 'zu', 'dzu'], 'づ'],
  de: 'で',
  do: 'ど',
  ba: 'ば',
  bi: 'び',
  bu: 'ぶ',
  be: 'べ',
  bo: 'ぼ',
  pa: 'ぱ',
  pi: 'ぴ',
  pu: 'ぷ',
  pe: 'ぺ',
  po: 'ぽ',
  kya: 'きゃ',
  kyu: 'きゅ',
  kyo: 'きょ',
  sya: [['sha', 'sya'], 'しゃ'],
  syu: [['shu', 'syu'], 'しゅ'],
  syo: [['sho', 'syo'], 'しょ'],
  tya: [['cha', 'tya'], 'ちゃ'],
  tyu: [['chu', 'tyu'], 'ちゅ'],
  tyo: [['cho', 'tyo'], 'ちょ'],
  nya: 'にゃ',
  nyu: 'にゅ',
  nyo: 'にょ',
  hya: 'ひゃ',
  hyu: 'ひゅ',
  hyo: 'ひょ',
  mya: 'みゃ',
  myu: 'みゅ',
  myo: 'みょ',
  rya: 'りゃ',
  ryu: 'りゅ',
  ryo: 'りょ',
  gya: 'ぎゃ',
  gyu: 'ぎゅ',
  gyo: 'ぎょ',
  zya: [['ja', 'zya'], 'じゃ'],
  zyu: [['ju', 'zyu'], 'じゅ'],
  zyo: [['jo', 'zyo'], 'じょ'],
  bya: 'びゃ',
  byu: 'びゅ',
  byo: 'びょ',
  pya: 'ぴゃ',
  pyu: 'ぴゅ',
  pyo: 'ぴょ',
  dya: [['dya', 'ja', 'dja'], 'ぢゃ'],
  dyu: [['dyu', 'ju', 'dju'], 'ぢゅ'],
  dyo: [['dyo', 'jo', 'djo'], 'ぢょ']
}

export const AllKatakanaCharacters: AllCharactersType = {
  a: 'ア',
  i: 'イ',
  u: 'ウ',
  e: 'エ',
  o: 'オ',
  ka: 'カ',
  ki: 'キ',
  ku: 'ク',
  ke: 'ケ',
  ko: 'コ',
  sa: 'サ',
  si_shi: [['shi', 'si'], 'シ'],
  su: 'ス',
  se: 'セ',
  so: 'ソ',
  ta: 'タ',
  ti_chi: [['chi', 'ti'], 'チ'],
  tu_tsu: [['tsu', 'tu'], 'ツ'],
  te: 'テ',
  to: 'ト',
  na: 'ナ',
  ni: 'ニ',
  nu: 'ヌ',
  ne: 'ネ',
  no: 'ノ',
  ha: 'ハ',
  hi: 'ヒ',
  hu_fu: [['fu', 'hu'], 'フ'],
  he: 'ヘ',
  ho: 'ホ',
  ma: 'マ',
  mi: 'ミ',
  mu: 'ム',
  me: 'メ',
  mo: 'モ',
  ya: 'ヤ',
  yu: 'ユ',
  yo: 'ヨ',
  ra: 'ラ',
  ri: 'リ',
  ru: 'ル',
  re: 'レ',
  ro: 'ロ',
  wa: 'ワ',
  wo: 'ヲ',
  n: 'ン',
  ga: 'ガ',
  gi: 'ギ',
  gu: 'グ',
  ge: 'ゲ',
  go: 'ゴ',
  za: 'ザ',
  zi_ji: [['ji', 'zi'], 'ジ'],
  zu: 'ズ',
  ze: 'ゼ',
  zo: 'ゾ',
  da: 'ダ',
  di: [['di', 'ji', 'dji', 'dzi'], 'ヂ'],
  du: [['du', 'zu', 'dzu'], 'ヅ'],
  de: 'デ',
  do: 'ド',
  ba: 'バ',
  bi: 'ビ',
  bu: 'ブ',
  be: 'ベ',
  bo: 'ボ',
  pa: 'パ',
  pi: 'ピ',
  pu: 'プ',
  pe: 'ペ',
  po: 'ポ',
  kya: 'キャ',
  kyu: 'キュ',
  kyo: 'キョ',
  sya: [['sha', 'sya'], 'シャ'],
  syu: [['shu', 'syu'], 'シュ'],
  syo: [['sho', 'syo'], 'ショ'],
  tya: [['cha', 'tya'], 'チャ'],
  tyu: [['chu', 'tyu'], 'チュ'],
  tyo: [['cho', 'tyo'], 'チョ'],
  nya: 'ニャ',
  nyu: 'ニュ',
  nyo: 'ニョ',
  hya: 'ヒャ',
  hyu: 'ヒュ',
  hyo: 'ヒョ',
  mya: 'ミャ',
  myu: 'ミュ',
  myo: 'ミョ',
  rya: 'リャ',
  ryu: 'リュ',
  ryo: 'リョ',
  gya: 'ギャ',
  gyu: 'ギュ',
  gyo: 'ギョ',
  zya: [['ja', 'zya'], 'ジャ'],
  zyu: [['ju', 'zyu'], 'ジュ'],
  zyo: [['jo', 'zyo'], 'ジョ'],
  bya: 'ビャ',
  byu: 'ビュ'
}
