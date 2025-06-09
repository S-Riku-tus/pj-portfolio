# Portfolio Website

Next.js 14とTailwind CSSで構築されたプロフェッショナルなポートフォリオサイトです。

## 🚀 特徴

- **モダンなデザイン**: プロフェッショナルで洗練されたUI/UX
- **レスポンシブ対応**: デスクトップ・モバイル両対応
- **高速表示**: Next.js 14 App Routerによる最適化
- **TypeScript**: 型安全な開発環境
- **ブログ機能**: Qiita記事連携

## 🛠 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **画像**: Next.js Image最適化

## 🚀 セットアップ

1. **依存関係のインストール**
```bash
npm install
```

2. **開発サーバーの起動**
```bash
npm run dev
```

3. **ブラウザでアクセス**
```
http://localhost:3000
```

## 📁 プロジェクト構成

```
pj-portfolio/
├── app/
│   ├── blog/              # ブログページ
│   ├── globals.css        # グローバルCSS
│   ├── layout.tsx         # レイアウト
│   └── page.tsx           # ホームページ
├── components/            # Reactコンポーネント
├── public/               # 静的ファイル
└── tailwind.config.js    # TailwindCSS設定
```

## 🎨 カスタマイズ

### 個人情報の更新
- `components/HeroSection.tsx`: 名前、職業、自己紹介
- `components/AboutSection.tsx`: スキル、経験
- `app/layout.tsx`: メタデータ

### 画像の変更
- `public/profile.jpg`: プロフィール写真

### 色の変更
`tailwind.config.js`でカラーパレットをカスタマイズできます。

## 🚀 デプロイ

### Vercel (推奨)
1. GitHubリポジトリにプッシュ
2. Vercelアカウント作成・連携
3. プロジェクトをインポート
4. 自動デプロイ完了

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。