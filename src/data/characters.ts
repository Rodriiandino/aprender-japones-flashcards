type CharactersGroup = {
  [key: string]: { [key: string]: string | [string[], string] }
}

export const HiraganaCharacters: { [group: string]: CharactersGroup } = {
  voicedConsonants: {
    vowels: {
      a: 'あ',
      i: 'い',
      u: 'う',
      e: 'え',
      o: 'お'
    },
    k: {
      ka: 'か',
      ki: 'き',
      ku: 'く',
      ke: 'け',
      ko: 'こ'
    },
    s: {
      sa: 'さ',
      si_shi: [['shi', 'si'], 'し'],
      su: 'す',
      se: 'せ',
      so: 'そ'
    },
    t: {
      ta: 'た',
      ti_chi: [['chi', 'ti'], 'ち'],
      tu_tsu: [['tsu', 'tu'], 'つ'],
      te: 'て',
      to: 'と'
    },
    n: {
      na: 'な',
      ni: 'に',
      nu: 'ぬ',
      ne: 'ね',
      no: 'の'
    },
    h: {
      ha: 'は',
      hi: 'ひ',
      hu_fu: [['fu', 'hu'], 'ふ'],
      he: 'へ',
      ho: 'ほ'
    },
    m: {
      ma: 'ま',
      mi: 'み',
      mu: 'む',
      me: 'め',
      mo: 'も'
    },
    y: {
      ya: 'や',
      yu: 'ゆ',
      yo: 'よ'
    },
    r: {
      ra: 'ら',
      ri: 'り',
      ru: 'る',
      re: 'れ',
      ro: 'ろ'
    },
    w: {
      wa: 'わ',
      wo: 'を'
    },
    special: {
      n: 'ん'
    },
    g: {
      ga: 'が',
      gi: 'ぎ',
      gu: 'ぐ',
      ge: 'げ',
      go: 'ご'
    },
    z: {
      za: 'ざ',
      zi_ji: [['ji', 'zi'], 'じ'],
      zu: 'ず',
      ze: 'ぜ',
      zo: 'ぞ'
    },
    d: {
      da: 'だ',
      di: [['di', 'ji', 'dji', 'dzi'], 'ぢ'],
      du: [['du', 'zu', 'dzu'], 'づ'],
      de: 'で',
      do: 'ど'
    },
    b: {
      ba: 'ば',
      bi: 'び',
      bu: 'ぶ',
      be: 'べ',
      bo: 'ぼ'
    },
    p: {
      pa: 'ぱ',
      pi: 'ぴ',
      pu: 'ぷ',
      pe: 'ぺ',
      po: 'ぽ'
    }
  },
  palatalizedConsonants: {
    k_special: {
      kya: 'きゃ',
      kyu: 'きゅ',
      kyo: 'きょ'
    },
    s_special: {
      sya: [['sha', 'sya'], 'しゃ'],
      syu: [['shu', 'syu'], 'しゅ'],
      syo: [['sho', 'syo'], 'しょ']
    },
    t_special: {
      tya: [['cha', 'tya'], 'ちゃ'],
      tyu: [['chu', 'tyu'], 'ちゅ'],
      tyo: [['cho', 'tyo'], 'ちょ']
    },
    n_special: {
      nya: 'にゃ',
      nyu: 'にゅ',
      nyo: 'にょ'
    },
    h_special: {
      hya: 'ひゃ',
      hyu: 'ひゅ',
      hyo: 'ひょ'
    },
    m_special: {
      mya: 'みゃ',
      myu: 'みゅ',
      myo: 'みょ'
    },
    r_special: {
      rya: 'りゃ',
      ryu: 'りゅ',
      ryo: 'りょ'
    },
    g_special: {
      gya: 'ぎゃ',
      gyu: 'ぎゅ',
      gyo: 'ぎょ'
    },
    z_special: {
      zya: [['ja', 'zya'], 'じゃ'],
      zyu: [['ju', 'zyu'], 'じゅ'],
      zyo: [['jo', 'zyo'], 'じょ']
    },
    b_special: {
      bya: 'びゃ',
      byu: 'びゅ',
      byo: 'びょ'
    },
    p_special: {
      pya: 'ぴゃ',
      pyu: 'ぴゅ',
      pyo: 'ぴょ'
    },
    d_special: {
      dya: [['dya', 'ja', 'dja'], 'ぢゃ'],
      dyu: [['dyu', 'ju', 'dju'], 'ぢゅ'],
      dyo: [['dyo', 'jo', 'djo'], 'ぢょ']
    }
  }
}

export const KatakanaCharacters: { [group: string]: CharactersGroup } = {
  voicedConsonants: {
    vowels: {
      a: 'ア',
      i: 'イ',
      u: 'ウ',
      e: 'エ',
      o: 'オ'
    },
    k: {
      ka: 'カ',
      ki: 'キ',
      ku: 'ク',
      ke: 'ケ',
      ko: 'コ'
    },
    s: {
      sa: 'サ',
      si_shi: [['shi', 'si'], 'シ'],
      su: 'ス',
      se: 'セ',
      so: 'ソ'
    },
    t: {
      ta: 'タ',
      ti_chi: [['chi', 'ti'], 'チ'],
      tu_tsu: [['tsu', 'tu'], 'ツ'],
      te: 'テ',
      to: 'ト'
    },
    n: {
      na: 'ナ',
      ni: 'ニ',
      nu: 'ヌ',
      ne: 'ネ',
      no: 'ノ'
    },
    h: {
      ha: 'ハ',
      hi: 'ヒ',
      hu_fu: [['fu', 'hu'], 'フ'],
      he: 'ヘ',
      ho: 'ホ'
    },
    m: {
      ma: 'マ',
      mi: 'ミ',
      mu: 'ム',
      me: 'メ',
      mo: 'モ'
    },
    y: {
      ya: 'ヤ',
      yu: 'ユ',
      yo: 'ヨ'
    },
    r: {
      ra: 'ラ',
      ri: 'リ',
      ru: 'ル',
      re: 'レ',
      ro: 'ロ'
    },
    w: {
      wa: 'ワ',
      wo: 'ヲ'
    },
    special: {
      n: 'ン'
    },
    g: {
      ga: 'ガ',
      gi: 'ギ',
      gu: 'グ',
      ge: 'ゲ',
      go: 'ゴ'
    },
    z: {
      za: 'ザ',
      zi_ji: [['ji', 'zi'], 'ジ'],
      zu: 'ズ',
      ze: 'ゼ',
      zo: 'ゾ'
    },
    d: {
      da: 'ダ',
      di: [['di', 'ji', 'dji', 'dzi'], 'ヂ'],
      du: [['du', 'zu', 'dzu'], 'ヅ'],
      de: 'デ',
      do: 'ド'
    },
    b: {
      ba: 'バ',
      bi: 'ビ',
      bu: 'ブ',
      be: 'ベ',
      bo: 'ボ'
    },
    p: {
      pa: 'パ',
      pi: 'ピ',
      pu: 'プ',
      pe: 'ペ',
      po: 'ポ'
    }
  },
  palatalizedConsonants: {
    k_special: {
      kya: 'キャ',
      kyu: 'キュ',
      kyo: 'キョ'
    },
    s_special: {
      sya: [['sha', 'sya'], 'シャ'],
      syu: [['shu', 'syu'], 'シュ'],
      syo: [['sho', 'syo'], 'ショ']
    },
    t_special: {
      tya: [['cha', 'tya'], 'チャ'],
      tyu: [['chu', 'tyu'], 'チュ'],
      tyo: [['cho', 'tyo'], 'チョ']
    },
    n_special: {
      nya: 'ニャ',
      nyu: 'ニュ',
      nyo: 'ニョ'
    },
    h_special: {
      hya: 'ヒャ',
      hyu: 'ヒュ',
      hyo: 'ヒョ'
    },
    m_special: {
      mya: 'ミャ',
      myu: 'ミュ',
      myo: 'ミョ'
    },
    r_special: {
      rya: 'リャ',
      ryu: 'リュ',
      ryo: 'リョ'
    },
    g_special: {
      gya: 'ギャ',
      gyu: 'ギュ',
      gyo: 'ギョ'
    },
    z_special: {
      zya: [['ja', 'zya'], 'ジャ'],
      zyu: [['ju', 'zyu'], 'ジュ'],
      zyo: [['jo', 'zyo'], 'ジョ']
    },
    b_special: {
      bya: 'ビャ',
      byu: 'ビュ',
      byo: 'ビョ'
    },
    p_special: {
      pya: 'ピャ',
      pyu: 'ピュ',
      pyo: 'ピョ'
    },
    d_special: {
      dya: [['dya', 'ja', 'dja'], 'ヂャ'],
      dyu: [['dyu', 'ju', 'dju'], 'ヂュ'],
      dyo: [['dyo', 'jo', 'djo'], 'ヂョ']
    }
  }
}
