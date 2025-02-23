## Astro Svelte Threlte

Astroをベースにして、Threlte(Three.js + Svelte)で3Dデータを表示します。

## Project Structure

```
/
├── dist      ...buildしたデータ
├── public    ...画像データ（public画像）などの静的アセッツ
├── scripts   ...開発に必要なnode.jsのコード（必要に応じて）
├── src       ...開発データ
│ ├── blocks      ...ブロックデータ
│ ├── components  ...部品データ
│ ├── data        ...案件に関わるデータ
│ ├── icons       ...アイコン用のsvgデータ
│ ├── image       ...画像データ（src画像）
│ ├── layouts     ...各ページで使用するレイアウト
│ ├── pages       ...各ページのデータ
│ ├── script      ...コンポーネントに依存しないスクリプト
│ ├── styles      ...共通スタイル
│ └── types       ...型データ（必要に応じて）
└── tokens    ...デザイントークンファイル
```

## Commands

| Command                    | Action                                                         |
| :------------------------- | :------------------------------------------------------------- |
| `npm install`              | インストール                                                   |
| `npm run dev`              | 開発スタート（サーバーは `localhost:3000`）                    |
| `npm run build`            | `./dist/` にビルド                                             |
| `npm run preview`          | ビルドしたデータをプレビュー                                   |
| `npm run delivery`         | ファイル納品用のデータを `./build/` に生成（ファイル一覧つき） |
| `npm run svgsprite`        | svgスプライトを生成（詳しくはIcon管理を参照）                  |
| `npm run style-dictionary` | デザイントークンファイルから `_variables.scss` ファイルを生成  |
