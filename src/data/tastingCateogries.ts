export type Items = {
  [key: string]: boolean;
};

export type CategoryItems = {
  [key: string]: Items;
};

export const appearanceDefault: CategoryItems = {
  清澄度: {
    澄んだ: false,
    深みのある: false,
    やや濁った: false,
    濁った: false,
  },
  輝き: {
    輝きのある: false,
    落ち着いた: false,
    モヤがかかった: false,
  },
  色調: {
    紫がかった: false,
    ルビー: false,
    黒味を帯びた: false,
    オレンジがかった: false,
    ガーネット: false,
    レンガ色: false,
    マホガニー: false,
  },
  濃淡: {
    薄い: false,
    やや明るい: false,
    明るい: false,
    やや濃い: false,
    濃い: false,
    非常に濃い: false,
  },
  粘性: {
    さらっとした: false,
    やや軽い: false,
    やや強い: false,
    強い: false,
  },
  外観の印象: {
    若い: false,
    若い状態を抜けた: false,
    軽い: false,
    熟した: false,
    成熟度が高い: false,
    濃縮感が強い: false,
    やや熟成した: false,
    熟成した: false,
    酸化熟成のニュアンス: false,
    酸化が進んだ: false,
    完全に酸化している: false,
  },
};

export const nodeDefault: CategoryItems = {
  第一印象: {
    閉じている: false,
    控えめ: false,
    しっかりと感じられる: false,
    力強い: false,
    チャーミングな: false,
    華やかな: false,
    濃縮感がある: false,
    深みのある: false,
    複雑な: false,
  },
  果実_花_植物: {
    イチゴ: false,
    ラズベリー: false,
    ブルーベリー: false,
    カシス: false,
    ブラックベリー: false,
    ブラックチェリー: false,
    干しプラム: false,
    乾燥イチジク: false,
    赤ピーマン: false,
    メントール: false,
    シダ: false,
    バラ: false,
    すみれ: false,
    牡丹: false,
    ゼラニウム: false,
    ローリエ: false,
    杉: false,
    針葉樹: false,
    ドライハーブ: false,
    タバコ: false,
    紅茶: false,
    キノコ: false,
    スーボア: false,
    トリュフ: false,
    腐葉土: false,
    土: false,
  },
  香辛料_芳香_化学物質: {
    血液: false,
    肉: false,
    なめし皮: false,
    燻製: false,
    シヴェ: false,
    ジビエ: false,
    コーヒー: false,
    カカオパウダー: false,
    ヴァニラ: false,
    黒胡椒: false,
    丁子: false,
    シナモン: false,
    ナツメグ: false,
    甘草: false,
    白檀: false,
    杜松の実: false,
    硫黄: false,
    樹脂: false,
    ヨード: false,
    ランシオ: false,
  },
  香りの印象: {
    若々しい: false,
    還元的: false,
    熟成感が現れている: false,
    酸化熟成の段階にある: false,
    酸化している: false,
    第1アロマが強い: false,
    第2アロマが強い: false,
    ニュートラル: false,
    木樽からのニュアンス: false,
  },
};

export const palateDefault: CategoryItems = {
  アタック: {
    軽い: false,
    やや軽い: false,
    やや強い: false,
    強い: false,
    インパクトのある: false,
  },
  甘み: {
    軽い: false,
    まろやか: false,
    豊かな: false,
    残糖がある: false,
  },
  酸味: {
    シャープな: false,
    爽やかな: false,
    なめらかな: false,
    円みのある: false,
    キメ細かい: false,
    やさしい: false,
    力強い: false,
  },
  タンニン分: {
    収斂性のある: false,
    力強い: false,
    緻密: false,
    サラサラとした: false,
    ヴィロードのような: false,
    シルキーな: false,
    溶け込んだ: false,
  },
  バランス: {
    スマートな: false,
    骨格のしっかりとした: false,
    固い: false,
    痩せた_渇いた: false,
    豊満な: false,
    肉厚な: false,
    力強い: false,
    流れるような: false,
    バランスの良い: false,
  },
  アルコール: {
    控えめ: false,
    やや軽め: false,
    中程度: false,
    やや強め: false,
    熱さを感じる: false,
  },
  余韻: {
    短い: false,
    やや短い: false,
    やや長い: false,
    長い: false,
  },
};

export const conclusionDefault: CategoryItems = {
  清澄度: {
    澄んだ: false,
    深みのある: false,
    やや濁った: false,
    濁った: false,
  },
  輝き: {
    輝きのある: false,
    落ち着いた: false,
    モヤがかかった: false,
  },
  色調: {
    紫がかった: false,
    ルビー: false,
    黒味を帯びた: false,
    オレンジがかった: false,
    ガーネット: false,
    レンガ色: false,
    マホガニー: false,
  },
  濃淡: {
    薄い: false,
    やや明るい: false,
    明るい: false,
    やや濃い: false,
    濃い: false,
    非常に濃い: false,
  },
  粘性: {
    さらっとした: false,
    やや軽い: false,
    やや強い: false,
    強い: false,
  },
  外観の印象: {
    若い: false,
    若い状態を抜けた: false,
    軽い: false,
    熟した: false,
    成熟度が高い: false,
    濃縮感が強い: false,
    やや熟成した: false,
    熟成した: false,
    酸化熟成のニュアンス: false,
    酸化が進んだ: false,
    完全に酸化している: false,
  },
};
