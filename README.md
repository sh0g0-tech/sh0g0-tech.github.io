# sh0g0-tech.github.io

Vite + React + TypeScript で作った GitHub Pages サイトです。`main` に push すると GitHub Actions でビルドされ、https://sh0g0-tech.github.io/ に自動でデプロイされます。

## 開発

```sh
npm install
npm run dev      # 開発サーバー
npm run build    # 本番ビルド (dist/)
npm run lint     # ESLint
```

## 今後の改善ステップ

1. **テンプレートの置き換え**: `src/App.tsx` のデモ内容(カウンター、Vite のリンク集)を自己紹介・プロジェクト一覧・連絡先に置き換える
2. **HTML メタ情報**: `index.html` の `lang` を `ja` にし、`<title>`・`description`・OGP タグを設定する
3. **不要ファイルの削除**: `src/assets/` のテンプレート画像、`public/icons.svg`、`App.css` の不要なスタイル
4. **コンポーネント分割**: セクションごとに `src/components/` へ分ける
5. **アクセシビリティ**: 画像の `alt`、外部リンクの `rel="noopener noreferrer"`、色のコントラストを確認する
6. **スマホ表示の確認**: 実機で横幅の小さい画面のレイアウト崩れがないか確認する
7. **CI の強化**: デプロイ前に `npm run lint` を実行する
8. **(必要になったら)ルーティング**: ページを増やす場合は React Router と `404.html` の対応を追加する
