# とおまち夏花火ナイト Reels 新台本 v6（実写B-roll生成プロンプト追加版）

v5からの変更点：手元に追加できる実写素材がないため、「本物の写真」の代わりに**フォトリアル（実写調）生成**でB-rollを4点作成し、臨場感をさらに強化する。灯真のイラストとは明確にスタイルを分け、ドキュメンタリー／イベント撮影のような自然な質感で生成すること。

---

## 生成時の注意（イラストとの違い）

- 「アニメ風」「イラスト」の語は一切使わない
- 「photorealistic」「documentary-style event photography」「shot on a mirrorless camera」「natural evening light」など、実写であることを明示するキーワードを必ず入れる
- 人物の顔は正面をはっきり映さない（後ろ姿・横顔・手元・足元など）ことで、モデル生成特有の違和感を避けつつ「その場にいる感じ」を出す
- 特定の実在人物・カメラマン・ブランド名は使用しない

---

## 新規B-roll（実写調・4点）

### B-1｜屋台の湯気アップ

```
Photorealistic documentary-style event photography, vertical 9:16.
Close-up shot of a Japanese summer festival food stall griddle,
takoyaki (octopus balls) sizzling with visible steam rising, warm
orange stall lighting reflecting off the metal griddle, blurred
red-and-white striped stall awning in the background. Shot on a
mirrorless camera with a shallow depth of field, natural warm
evening light mixed with stall lighting, slightly handheld candid
feel, film-like grain. No visible people's faces in frame.
```

### B-2｜浴衣の来場者たちが屋台を眺めながら歩く後ろ姿

```
Photorealistic documentary-style event photography, vertical 9:16.
Wide shot from behind of a small group of festival-goers in yukata,
walking leisurely down a lantern-lit festival street lined with food
stalls, warm string lights overhead, soft evening haze. Natural
candid documentary photography feel, shallow depth of field, warm
color grading (deep navy dusk sky, warm lantern glow, orange-red
stall lighting). Faces not visible (shot from behind).
```

### B-3｜観覧席で花火を見上げる人々の後ろ姿（ワイド）

```
Photorealistic documentary-style event photography, vertical 9:16.
Wide shot from behind of a relaxed crowd sitting on picnic blankets
at a riverside fireworks viewing area, comfortable spacing between
groups (not overcrowded), looking up at fireworks bursting in the
night sky above a calm river. Warm lantern string lights along the
edge of the frame, city lights reflecting on the water in the
distance. Natural documentary event-photography feel, shot on a
mirrorless camera, shallow depth of field, warm-to-cool color
grading (deep navy night sky, warm lantern light, orange-red firework
glow). Faces not visible (shot from behind).
```

### B-4｜駅から祭り会場までの道・浴衣の足元

```
Photorealistic documentary-style event photography, vertical 9:16.
Low-angle candid shot of feet in geta sandals and the hem of a
navy yukata with a fireworks pattern, walking along a paved street
at dusk, paper lanterns strung overhead slightly out of focus,
warm string lights beginning to glow as the sky darkens. Natural
handheld documentary photography feel, shallow depth of field, warm
color grading (deep navy dusk sky, warm lantern glow). No face
visible.
```

---

## 更新後シナリオ（タイムライン想定・約27秒）

| # | パート | 尺目安 | 映像 | セリフ(VO) | 字幕 | 素材区分 | 使用素材 |
|---|---|---|---|---|---|---|---|
| 1 | プレフック | 0.6s | 花火が咲く瞬間 | なし | なし | 実写 | 動画_体験①_花火.mp4 |
| 2 | フック（声） | 3.0s | 灯真が笑顔で手を振って迎える | 「今年の夏、ここに決めた。」 | セリフ表示 | Gemini生成（音声込み） | 新規：フック動画プロンプト |
| 3 | 発見① | 0.8s | 駅からの道・足元（新規B-roll） | なし | 「駅から歩いてすぐ、」 | 実写調生成 | B-4新規 |
| 4 | 発見② | 1.2s | 提灯が揺れる | なし | なし | 実写 | 動画_発見①_提灯の揺れ.mp4 |
| 5 | 発見③ | 1.2s | 夜店POV | なし | なし | 実写 | 動画_発見②_夜店POV.mp4 |
| 6 | 発見④ | 0.9s | 浴衣の来場者が歩く後ろ姿（新規B-roll） | なし | 「ちょうどいい賑わいの、花火がある。」 | 実写調生成 | B-2新規 |
| 7 | 体験① | 1.5s | 灯真イラスト（屋台で頬張る） | なし | 「屋台をぶらり、」 | イラスト | ①屋台で頬張る.png |
| 8 | 体験② | 0.8s | 屋台の湯気アップ（新規B-roll） | なし | なし | 実写調生成 | B-1新規 |
| 9 | 体験③ | 1.5s | 灯真イラスト（花火に振り返って歓声） | なし | 「花火に、歓声。」 | イラスト | ③花火に振り返って歓声.png |
| 10 | 体験④ | 1.2s | 観覧席の実写 | なし | なし | 実写 | A-4観覧席エリア.png |
| 11 | 体験⑤（予約席） | 1.5s | 灯真イラスト（予約席でくつろぐ） | なし | 「ゆったり座れる、予約席もあるよ。」 | イラスト | ④予約席でくつろぐ灯真.png |
| 12 | 体験⑥（宿・実写動画） | 1.4s | 山のあかり旅館の実写動画 | なし | なし | 実写 | 動画_体験②_山のあかり.mp4 |
| 13 | 体験⑦（宿・複数施設） | 1.7s | 宿3施設クイックフラッシュ | なし | 「泊まって、朝もゆっくり。」 | 実写 | シーン3.5：宿泊案内.mp4 |
| 14 | クライマックス前フラッシュ | 1.1s | 観覧席から花火を見上げる後ろ姿（新規B-roll） | なし | なし | 実写調生成 | B-3新規 |
| 15 | クライマックス | 2.1s | 花火全景 | なし | 「ちょうどいい賑わいで、夏、灯る。」 | 実写 | A-1花火全景.png |
| 16 | CTA（声） | 3.2s | 灯真が観覧席そばで正面から話しかける | 「予約なしでも楽しめるけど、ゆったり見るなら予約席がおすすめだよ。会いに来てね。」 | セリフ表示 | Gemini生成（音声込み） | 新規：CTA動画プロンプト |
| 17 | エンドカード | 1.5s | ロゴ／情報カード | なし | 「とおまち夏花火ナイト｜8月中旬 土曜」＋「予約席はプロフィールのリンクから」 | テキストカード | 新規作成 |

合計 約27秒（推奨レンジ20〜35秒に適合）。実写・実写調カット数14 / イラストカット数3 / Gemini音声動画2 / テキストカード1。実写比率がさらに上がり、カット数も増えてテンポが良くなる構成。

---

## Gemini用 動画生成プロンプト（音声込み・キャラクター2点）※v5から変更なし

### 共通キャラクター設定
三つ編みヘアスタイル、暖色系のちょうちん型ヘアアクセサリー（かんざし）、紺色（濃紺〜インディゴ）の浴衣に花火柄。20代前半くらいの若い女性。明るく親しみやすい声のトーン。既存アセットと同じ、ノスタルジックであたたかみのある夏祭りの世界観。特定の実在作家名は使用しない。縦型9:16。

### ① フック動画プロンプト（オープニング・声あり）

```
Vertical 9:16 video, high-quality Japanese anime-style animation.
A young woman with a braided hairstyle, wearing a navy/indigo yukata
with a subtle fireworks pattern and a warm-glowing lantern-shaped
hairpin, stands at the entrance of a lantern-lit festival street
lined with food stalls. She turns toward the camera with a bright,
joyful smile, waves one hand in a warm "come on over" gesture, and
speaks directly to the viewer. A single firework starburst blooms
softly in the night sky behind her. Natural subtle camera motion
(slight handheld dolly-in). Warm color grading (deep navy sky
#1B2A4A, warm lantern white #FFF6E5, orange-red firework accent
#E8633C), nostalgic Japanese summer festival mood.

Dialogue (spoken by the character, in Japanese, bright and cheerful
tone): "今年の夏、ここに決めた。"

Audio: warm, energetic young woman's voice; soft ambient festival
sounds (distant chatter, festival music, light firework whoosh) mixed
low under the dialogue.
```

### ② CTA動画プロンプト（クロージング・声あり／カフェ背景は使用しない）

```
Vertical 9:16 video, high-quality Japanese anime-style animation.
The same young woman (braided hairstyle, navy/indigo yukata with
fireworks pattern, warm lantern-shaped hairpin) stands near a
comfortable reserved-seating area at a riverside fireworks festival
at night, facing the camera directly at a medium close-up (chest-up)
framing. Paper lanterns and softly blurred fireworks light the
background; a calm river with light reflections is visible behind
her. She speaks warmly and invitingly to the viewer with a gentle
smile and a small welcoming hand gesture. Natural subtle camera
motion (static or very slight handheld sway). Warm color grading
(deep navy sky #1B2A4A, warm lantern white #FFF6E5, orange-red
firework accent #E8633C), nostalgic Japanese summer festival mood.
Do not depict a cafe, indoor coffee shop, or tea-house setting —
the scene must stay outdoors at the festival/riverside.

Dialogue (spoken by the character, in Japanese, warm and calm
closing tone): 「予約なしでも楽しめるけど、ゆったり見るなら予約席が
おすすめだよ。会いに来てね。」

Audio: warm, calm young woman's voice, soft ambient festival sounds
and distant fireworks under the dialogue.
```

---

## 進め方

1. B-1〜B-4の実写調カットを生成（写真でも短尺動画でもどちらでも可）
2. フック・CTAの音声込みキャラクター動画をGeminiで生成
3. すべて確認後、既存のイラスト①③④・実写素材と合わせてCapCutで最終組み立て
