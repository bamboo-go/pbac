# Physical Body as a Code (PBaC)

> Debug your body like code. / 身体の不調を、コードのように論理的にデバッグする。

[English](#english) | [日本語](#日本語)

---

## English

### Concept

PBaC is an open-source "body debugging and refactoring" platform for engineers and knowledge workers. It replaces willpower-driven health advice with an engineering workflow:

- Treat a physical problem as a **bug** and track it as an Issue
- Measure it with a **benchmark**, such as the Knee-to-Wall test
- Isolate the root cause with a **temporary bypass**
- Apply a **patch** and verify it by measuring again
- Keep the whole log in **Git** and share it

PBaC is a personal logging framework, not medical advice. The simulator is a conceptual illustration, not a clinical measurement. If you have pain, numbness, or swelling, consult a medical professional.

### Manage your own body with this template

1. Click **Use this template** at the top of this repository to create your own copy.
2. Clone your copy and start the site (see below).
3. Add a bug as a Markdown file in `src/content/issues/`, using `issue-001.md` as a reference. The frontmatter is validated by the schema in `src/content/config.ts`.
4. Track day-to-day progress on GitHub Issues with the template in `.github/ISSUE_TEMPLATE/`.
5. Replace the `your-name` GitHub URLs and the `example.com` affiliate link with your own.

### Getting started

Requires Node.js 20.3 or later.

```bash
npm install
npm run dev      # Dev server at http://localhost:4321
npm run build    # Type check and static build to dist/
npm run preview  # Preview the production build
```

To deploy, connect the repository to Vercel or Cloudflare Pages, with build command `npm run build` and output directory `dist`.

---

## 日本語

### コンセプト

PBaC は、ITエンジニア・ナレッジワーカーのための、オープンソース思想に基づく「生体デバッグ＆リファクタリング」プラットフォームです。根性論の健康法の代わりに、エンジニアリングのワークフローを身体に適用します。

- 身体の不調を**バグ**として捉え、Issue で管理する
- Knee-to-Wall テストなどの**ベンチマーク**で数値化する
- **一時パッチ**で原因を切り分ける
- **パッチ**を適用し、再測定で検証する
- すべてのログを **Git** で管理し、公開・共有する

PBaC は個人の記録用フレームワークであり、医学的助言ではありません。シミュレーターは概念を示すもので、臨床的な測定値ではありません。痛み・しびれ・腫れがある場合は、医療機関に相談してください。

### 「Use this template」で自分の身体を管理する

1. このリポジトリ上部の **Use this template** をクリックし、自分のリポジトリを作成します。
2. 作成したリポジトリをクローンし、サイトを起動します（下記参照）。
3. `issue-001.md` を参考に、`src/content/issues/` に Markdown ファイルとしてバグを追加します。フロントマターは `src/content/config.ts` のスキーマで検証されます。
4. 日々の経過は、`.github/ISSUE_TEMPLATE/` のテンプレートを使って GitHub Issues で管理します。
5. `your-name` を含む GitHub の URL と、`example.com` のアフィリエイトリンクを自分のものに置き換えます。

### サイトの立ち上げ

Node.js 20.3 以上が必要です。

```bash
npm install
npm run dev      # 開発サーバーを起動 (http://localhost:4321)
npm run build    # 型チェックと静的ビルド (dist/ に出力)
npm run preview  # 本番ビルドをプレビュー
```

デプロイする場合は、リポジトリを Vercel または Cloudflare Pages に接続し、ビルドコマンドに `npm run build`、出力ディレクトリに `dist` を指定します。
