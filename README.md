# 自己紹介サイト

React と TypeScript で作成した、1ページ完結の自己紹介サイト。学習の一環として、環境構築から、公開の自動化までを、自分の手で進めた。

**公開サイト**:https://sh0g0-tech.github.io

## 使っている技術

| 分類 | 技術 |
|---|---|
| UI | React、TypeScript |
| ビルド | Vite |
| コードチェック | ESLint |
| 自動デプロイ | GitHub Actions |
| 公開 | GitHub Pages |

## サイトの内容

- ナビゲーション(クリックで、各セクションへスムーズに移動)
- Hero(名前と、一言の自己紹介)
- 趣味
- 最近ハマっていること
- 行ってみたい場所(写真つきのカード)
- 連絡先

ダーク系の配色で、背景には、格子の線と、ゆっくり動く光を挿入。

## 工夫した点

- **内容を、型付きのデータとして、コンポーネントから分けた。** 表示する内容は `src/data/profile.ts` にまとめ、データの形は `src/types.ts` で定義している。項目を足したいときは、データに1件書き足すだけで、画面に反映される。型があるため、書き間違いは、保存やビルドの時点で見つかる。
- **`main` に push するだけで、自動で公開される。** GitHub Actions が、ビルドして、GitHub Pages へ配信する仕組みにしている。
- **動きが苦手な人に、配慮した。** OS で「動きを減らしたい」と設定している人には、背景の光の動きや、ホバーの動きが止まるようにしている(`prefers-reduced-motion`)。
- **写真は、公開前に確認した。** 撮影場所の情報(位置情報)が入っていないことを確認し、表示を速くするために、サイズを小さくしている。
- **色を、CSS 変数にまとめた。** 背景、文字、アクセントの色を1か所にまとめているので、あとから、雰囲気を変えやすくなっている。

## ローカルでの動かし方

Node.js が必要(GitHub Actions では、Node.js 22 を使用)。

```bash
git clone https://github.com/sh0g0-tech/sh0g0-tech.github.io.git
cd sh0g0-tech.github.io
npm install
npm run dev
```

ターミナルに表示された URL(通常は `http://localhost:5173/`)を、ブラウザで開く。

### そのほかのコマンド

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発用のサーバーを起動する |
| `npm run build` | 型をチェックして、公開用のファイルを `dist` フォルダに作る |
| `npm run lint` | ESLint で、コードの書き方をチェックする |

## フォルダの構成

```
.
├─ .github/workflows/deploy.yml   自動デプロイの設定(GitHub Actions)
├─ src/
│  ├─ components/                 画面の部品(Hero、ナビ、一覧、連絡先)
│  ├─ data/profile.ts             表示する内容(データ)
│  ├─ types.ts                    データの型
│  ├─ App.tsx                     部品を並べて、ページを組み立てる
│  ├─ main.tsx                    アプリの起動
│  └─ index.css                   スタイル(色の変数、レイアウト、動き)
├─ index.html                     サイトの入口
└─ vite.config.ts                 Vite の設定
```

## 開発で気づいたこと

- TypeScript は、`typescript-eslint` が対応している範囲に合わせて、6.0 系を使用。最新版を入れると、依存パッケージの組み合わせが合わず、インストールが止まったため。
- ユーザーサイト(`ユーザー名.github.io`)は、サイトがルートで配信されるため、Vite の `base` の設定は、変更していない。

## 今後の課題

- `lint` を、GitHub Actions でも、自動で実行する

## 公開について

このリポジトリは、学習の記録も兼ねています。サイトの内容は、簡単な自分の自己紹介です。