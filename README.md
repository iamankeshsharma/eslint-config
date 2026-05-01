
# @iamankeshsharma/eslint-config

> Modern, composable ESLint config for JavaScript, TypeScript, React, Next.js & Tailwind CSS

![npm version](https://img.shields.io/npm/v/@iamankeshsharma/eslint-config) ![downloads](https://img.shields.io/npm/dm/@iamankeshsharma/eslint-config) ![license](https://img.shields.io/github/license/iamankeshsharma/eslint-config) ![stars](https://img.shields.io/github/stars/iamankeshsharma/eslint-config?style=social)

---

## ⚡ Quick Start

```bash
npm install -D eslint @iamankeshsharma/eslint-config
```

```js
import config from "@iamankeshsharma/eslint-config";

export default config();
```

---

## ✨ Why this config?

Most ESLint configs are:

* too rigid ❌
* too minimal ❌
* hard to extend ❌

This config is:

* ✅ Modular
* ✅ Composable
* ✅ Flat config ready (ESLint v9+)
* ✅ Works with modern stacks (Next.js, Tailwind, TS)
* ✅ Flexible peer dependencies (no install conflicts)
* ✅ Designed for real-world scaling (monorepos, teams)

---

## 🚀 Installation

```bash
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-sonarjs eslint-plugin-simple-import-sort eslint-config-prettier @iamankeshsharma/eslint-config
```

👉 Install additional plugins only when needed (React, Next, Tailwind).

---

## 📦 Usage

### Base

```js
import createConfig from "@iamankeshsharma/eslint-config";

export default createConfig();
```

---

## ⚙️ Customization

```js
import createConfig from "@iamankeshsharma/eslint-config";

export default createConfig({
  ignores: ["coverage", "generated"],
  rules: {
    "no-console": "warn",
  },
});
```

---

## ⚛️ React

### Install

```bash
npm install -D eslint-plugin-react eslint-plugin-react-hooks
```

### Usage

```js
import createReactConfig from "@iamankeshsharma/eslint-config/react";

export default createReactConfig();
```

---

## ▲ Next.js

### Install

```bash
npm install -D @next/eslint-plugin-next eslint-plugin-react eslint-plugin-react-hooks
```

### Usage

```js
import createNextConfig from "@iamankeshsharma/eslint-config/next";

export default createNextConfig();
```

---

## 🎨 Tailwind CSS

### Install

```bash
npm install -D eslint-plugin-tailwindcss prettier prettier-plugin-tailwindcss
```

### Usage

```js
import createTailwindConfig from "@iamankeshsharma/eslint-config/tailwind";

export default createTailwindConfig();
```

---

## ✨ Tailwind + Prettier

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

* ✔ Automatically sorts Tailwind classes
* ✔ Cleaner diffs in PRs

---

## ⚡ Combined Setup (Recommended)

### Next.js + Tailwind

```js
import createNextConfig from "@iamankeshsharma/eslint-config/next";
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  ...createNextConfig(),

  {
    plugins: { tailwindcss },
    settings: {
      tailwindcss: {
        callees: ["clsx", "cn"],
        config: "tailwind.config.js",
      },
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-contradicting-classname": "error",
    },
  },
];
```

---

## 🧠 What You Get

### Core

* ESLint v9 flat config
* TypeScript support
* Import sorting
* Code quality rules (SonarJS)
* Unicorn best practices
* Prettier compatibility

### React / Next.js

* Hooks enforcement
* JSX best practices
* Next.js Core Web Vitals rules

### Tailwind

* Class order enforcement
* Conflict detection
* Shorthand optimization

---

## 🏗️ Project Structure

```text
eslint-config/
├ base/
├ react/
├ next/
├ tailwind/
└ package.json
```

---

## 🔧 Scripts

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write .",
    "release": "standard-version",
    "release:dry": "standard-version --dry-run"
  }
}
```

---

## ⚠️ Version Compatibility

| Package           | Version |
| ----------------- | ------- |
| eslint            | ^9      |
| @eslint/js        | ^9      |
| typescript-eslint | ^8      |

👉 Designed for ESLint v9 flat config

---

## 🚀 Release Workflow

This project uses **standard-version** for automated versioning and changelog generation.

---

### 🧩 1. Write Conventional Commits

```bash
feat: add react config support
fix: resolve peer dependency issue
chore: update dependencies
```

#### Version Impact

| Commit Type     | Version Bump |
| --------------- | ------------ |
| fix             | Patch        |
| feat            | Minor        |
| BREAKING CHANGE | Major        |

---

### ⚙️ 2. Create Release

```bash
npm run release
```

👉 Automatically:

* bumps version
* updates `CHANGELOG.md`
* creates commit + tag

---

### 🔍 3. Verify

```bash
npm pack
git log --oneline -5
```

---

### ☁️ 4. Push

```bash
git push --follow-tags
```

---

### 📦 5. Publish

```bash
npm publish --access public
```

---

### 🔁 Full Flow

```bash
git add .
git commit -m "feat: improve eslint config compatibility"

npm run release
git push --follow-tags
npm publish --access public
```

---

## 🧪 Testing Before Publish

```bash
npm pack
```

Test install:

```bash
mkdir test-install
cd test-install
npm init -y
npm install ../your-package.tgz
```

---

## 📄 License

MIT

---

## ⭐ Support

If this helped you, consider giving a star ⭐
