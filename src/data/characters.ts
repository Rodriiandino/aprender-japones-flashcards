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
  [key: string]: CharacterType
}

export const AllCharacters: AllCharactersType = {
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
  wa: {
    hiragana: 'わ',
    katakana: 'ワ',
    romaji: 'wa'
  },
  wo: {
    hiragana: 'を',
    katakana: 'ヲ',
    romaji: 'wo'
  },
  n: {
    hiragana: 'ん',
    katakana: 'ン',
    romaji: 'n'
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
  },
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
