# とおまち夏花火ナイト Reels 新台本 v5（実写強化・Gemini動画生成プロンプト版）

v4からの変更点：
- CTAの既存動画（動画_話しかけ_灯真.mp4）はカフェ背景が世界観に合わないため不使用に変更。フック・CTAともにGemini（音声込み動画生成）で作り直す
- セリフは静止画からではなく、動画生成プロンプトに直接組み込む（Geminiは音声込みで動画を生成できるため）
- 実写カットを増やし、イラストカットを絞ることで「臨場感」を強化。発見パートのイラスト①点を削除し、代わりに実写を追加
- 灯真イラストは①③④の3点のみ使用（体験パートのアクセントとして最小限に）

---

## 全体設計方針

- ネガティブワードなし。OK表現（「ゆったり」「ふらっと」「ちょうどいい賑わい」）中心
- 実写：イラスト＝おおよそ7：3程度まで実写比率を引き上げる
- セリフ（灯真の声）はフックとCTAの2箇所のみ、Gemini動画生成時に音声込みで作成
- CTAの背景はカフェ厳禁。花火大会・観覧席まわりの世界観で統一

---

## 新シナリオ（タイムライン想定・約25秒）

| # | パート | 尺目安 | 映像 | セリフ(VO) | 字幕 | 素材区分 | 使用素材 |
|---|---|---|---|---|---|---|---|
| 1 | プレフック | 0.6s | 花火が咲く瞬間 | なし | なし | 実写 | 動画_体験①_花火.mp4 |
| 2 | フック（声） | 3.0s | 灯真が笑顔で手を振って迎える | 「今年の夏、ここに決めた。」 | セリフ表示 | Gemini生成（音声込み） | 新規：フック動画プロンプト（後述） |
| 3 | 発見① | 1.3s | 提灯が揺れる | なし | 「駅から歩いてすぐ、」 | 実写 | 動画_発見①_提灯の揺れ.mp4 |
| 4 | 発見② | 1.3s | 夜店POV | なし | なし | 実写 | 動画_発見②_夜店POV.mp4 |
| 5 | 発見③ | 1.2s | 提灯アップ | なし | 「ちょうどいい賑わいの、」 | 実写 | A-3提灯アップ.png |
| 6 | 発見④ | 1.2s | 駅から会場への道 | なし | 「花火がある。」 | 実写 | A-8駅から会場への道.png |
| 7 | 体験① | 1.6s | 灯真イラスト（屋台で頬張る） | なし | 「屋台をぶらり、」 | イラスト | ①屋台で頬張る.png |
| 8 | 体験② | 1.3s | 屋台の実写 | なし | なし | 実写 | A-2河川敷の夜店.png |
| 9 | 体験③ | 1.6s | 灯真イラスト（花火に振り返って歓声） | なし | 「花火に、歓声。」 | イラスト | ③花火に振り返って歓声.png |
| 10 | 体験④ | 1.3s | 観覧席の実写 | なし | なし | 実写 | A-4観覧席エリア.png |
| 11 | 体験⑤（予約席） | 1.6s | 灯真イラスト（予約席でくつろぐ） | なし | 「ゆったり座れる、予約席もあるよ。」 | イラスト | ④予約席でくつろぐ灯真.png |
| 12 | 体験⑥（宿・実写動画） | 1.5s | 山のあかり旅館の実写動画 | なし | なし | 実写 | 動画_体験②_山のあかり.mp4 |
| 13 | 体験⑦（宿・複数施設） | 1.8s | 宿3施設クイックフラッシュ | なし | 「泊まって、朝もゆっくり。」 | 実写 | シーン3.5：宿泊案内.mp4 |
| 14 | クライマックス | 2.3s | 花火全景 | なし | 「ちょうどいい賑わいで、夏、灯る。」 | 実写 | A-1花火全景.png |
| 15 | CTA（声） | 3.2s | 灯真が観覧席そばで正面から話しかける | 「予約なしでも楽しめるけど、ゆったり見るなら予約席がおすすめだよ。会いに来てね。」 | セリフ表示 | Gemini生成（音声込み） | 新規：CTA動画プロンプト（後述） |
| 16 | エンドカード | 1.5s | ロゴ／情報カード | なし | 「とおまち夏花火ナイト｜8月中旬 土曜」＋「予約席はプロフィールのリンクから」 | テキストカード | 新規作成 |

合計 約25秒（推奨レンジ20〜35秒に適合）。実写カット数10 / イラストカット数3 / Gemini音声動画2 / テキストカード1。

---

## Gemini用 動画生成プロンプト（音声込み・2点）

### 共通キャラクター設定（両方に必ず含める）
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

## 実写素材について

現在使える実写素材（写真・動画）は以下の通りで、これを最大限使う形で上記の構成を組みました。

- 実写動画：観覧席パン／花火／山のあかり旅館／提灯の揺れ／夜店POV（各5秒）
- 実写写真：花火全景／河川敷の夜店／夜店全景／提灯アップ／観覧席エリア／宿泊施設3件／駅から会場への道／純喫茶あかり店内

これ以上さらに実写比率を上げたい場合は、上記以外の新しい写真・動画素材（例：屋台の湯気や食べ物アップ、行列で楽しそうに並ぶ人々、実際の来場者の笑顔など）を追加でご提供いただけると、より臨場感を出せます。手元に使えそうな素材があれば教えてください。

---

## 進め方

1. 上記2点のGeminiプロンプトで音声込み動画を生成（フック・CTA）
2. 生成された動画を確認（セリフの発音・声のトーン・カフェが映っていないか等）
3. 既存のイラスト①③④（体験パート用）と実写素材をあわせて、CapCutで最終組み立て
