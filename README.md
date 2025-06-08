# Portfolio Blog - Next.js & Qiita Integration

プロフェッショナルなポートフォリオサイトとQiita記事を統合したブログシステムです。

## 🚀 特徴

- **モダンなデザイン**: 企業HPレベルの洗練されたUI/UX
- **Qiita連携**: 自動的にQiita記事を取得・表示
- **レスポンシブ対応**: デスクトップ・モバイル両対応
- **高速表示**: Next.js 14 App Routerによる最適化
- **TypeScript**: 型安全な開発環境

## 🛠 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Lucide React
- **API**: Qiita API v2
- **デプロイ**: Vercel (推奨)

## 📁 ディレクトリ構成

```
portfolio-blog/
├── app/
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx        # 記事詳細ページ
│   │   └── page.tsx            # ブログ一覧ページ
│   ├── globals.css             # グローバルCSS
│   ├── layout.tsx              # アプリケーションレイアウト
│   └── page.tsx                # ホームページ
├── components/
│   ├── AboutSection.tsx        # 自己紹介セクション
│   ├── ExperienceSection.tsx   # 経歴セクション
│   ├── Header.tsx              # ヘッダーナビゲーション
│   ├── HeroSection.tsx         # メインビジュアル
│   ├── SkillsSection.tsx       # スキルセクション
│   └── WorksSection.tsx        # 作品セクション
├── public/
│   └── (画像ファイルなど)
├── .env.local                  # 環境変数
├── next.config.js              # Next.js設定
├── package.json                # 依存関係
├── tailwind.config.js          # TailwindCSS設定
└── tsconfig.json               # TypeScript設定
```

## 🚀 セットアップ手順

### 1. プロジェクト作成

```bash
# Next.jsプロジェクトを作成
npx create-next-app@latest portfolio-blog --typescript --tailwind --eslint --app

# プロジェクトディレクトリに移動
cd portfolio-blog
```

### 2. 必要なパッケージのインストール

```bash
# 追加パッケージをインストール
npm install lucide-react
npm install -D @types/node
```

### 3. ファイル構成の作成

プロジェクトルートに以下のディレクトリとファイルを作成してください：

```bash
# ディレクトリ作成
mkdir components
mkdir app/blog
mkdir app/blog/[id]

# 必要なファイルを作成（上記のコードをコピペ）
touch components/Header.tsx
touch components/HeroSection.tsx
touch components/AboutSection.tsx
touch components/ExperienceSection.tsx
touch components/SkillsSection.tsx
touch components/WorksSection.tsx
touch app/blog/page.tsx
touch app/blog/[id]/page.tsx
```

### 4. 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成：

```bash
# .env.local
NEXT_PUBLIC_QIITA_USERNAME=your_qiita_username
```

### 5. 各ファイルにコードをコピー

上記で提供されたコードを対応するファイルにコピーしてください。

### 6. 個人情報のカスタマイズ

以下のファイルで個人情報を編集してください：

#### `components/HeroSection.tsx`
- 名前、職業、自己紹介文
- SNSリンク（GitHub, LinkedIn, Email）

#### `components/AboutSection.tsx`
- 自己紹介文
- 得意分野

#### `components/ExperienceSection.tsx`
- 職歴・学歴
- 会社名、期間、業務内容

#### `components/SkillsSection.tsx`
- スキル一覧とレベル
- カテゴリー（フロントエンド、バックエンド、その他）

#### `components/WorksSection.tsx`
- 制作物・プロジェクト
- GitHub、デモサイトのリンク

#### `app/layout.tsx`
- サイトのメタデータ（title, description）

### 7. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスしてサイトを確認できます。

## 🎨 カスタマイズ

### 色の変更
`tailwind.config.js` で色を変更できます：

```javascript
colors: {
  primary: {
    50: '#eff6ff',   // より明るいブルー
    600: '#2563eb',  // メインカラー
    700: '#1d4ed8',  // 濃いブルー
  },
  // ... 他の色
}
```

### フォントの変更
`app/layout.tsx` でフォントを変更できます：

```typescript
import { Inter, Noto_Sans_JP } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })
```

## 🚀 デプロイ手順

### Vercelでのデプロイ（推奨）

1. **GitHubリポジトリの作成**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio-blog.git
git push -u origin main
```

2. **Vercelアカウント作成**
- [Vercel](https://vercel.com)でアカウント作成
- GitHubアカウントと連携

3. **プロジェクトをインポート**
- Vercelダッシュボードで「New Project」
- GitHubリポジトリを選択
- 環境変数を設定：
  - `NEXT_PUBLIC_QIITA_USERNAME`: あなたのQiitaユーザー名

4. **デプロイ実行**
- 「Deploy」ボタンをクリック
- 数分でデプロイ完了

### その他のデプロイオプション

- **Netlify**: Vercelの代替として利用可能
- **GitHub Pages**: 静的サイトとしてエクスポート可能
- **Firebase Hosting**: Googleのホスティングサービス

## 🔧 トラブルシューティング

### よくある問題

1. **Qiita記事が表示されない**
   - `.env.local` でユーザー名が正しく設定されているか確認
   - Qiitaのユーザー名に間違いがないか確認

2. **スタイルが適用されない**
   - TailwindCSSの設定を確認
   - `npm run dev` でサーバーを再起動

3. **TypeScriptエラー**
   - 型定義を確認
   - `npm run lint` でエラーをチェック

## 📝 今後の拡張案

- **お問い合わせフォーム**: EmailJSやNetlify Formsを使用
- **ダークモード**: テーマ切り替え機能
- **多言語対応**: next-i18nextを使用
- **SEO最適化**: next-seoを使用
- **アナリティクス**: Google Analyticsの導入
- **CMS連携**: HeadlessCMSとの統合

## 📄 ライセンス

MIT License

## 🤝 貢献

プルリクエストや課題報告をお待ちしています。

---

**作成者**: [Your Name](https://github.com/yourusername)  
**連絡先**: your.email@example.com