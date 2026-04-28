# @ankesh/eslint-config

> Modern, composable ESLint config for JavaScript, TypeScript, React, Next.js & Tailwind CSS

![npm version](https://img.shields.io/npm/v/@ankesh/eslint-config) ![downloads](https://img.shields.io/npm/dm/@ankesh/eslint-config) ![license](https://img.shields.io/github/license/iamankeshsharma/eslint-config) ![stars](https://img.shields.io/github/stars/iamankeshsharma/eslint-config?style=social)

---

## ✨ Why this config?

Most ESLint configs are:

- too rigid ❌  
- too minimal ❌  
- hard to extend ❌  

This config is:

- ✅ Modular  
- ✅ Composable  
- ✅ Flat config ready (ESLint v9+)  
- ✅ Works with modern stacks (Next.js, Tailwind, TS)  
- ✅ Designed for real-world scaling (monorepos, teams)  

---

## 🚀 Installation

```bash
npm install -D eslint@^9 @eslint/js@^9 typescript-eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-sonarjs eslint-plugin-simple-import-sort eslint-config-prettier @ankesh/eslint-config
```

---

## 📦 Usage

### Base

```js
import createConfig from "@ankesh/eslint-config";

export default createConfig();
```

---

## ⚙️ Customization

```js
import createConfig from "@ankesh/eslint-config";

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
import createReactConfig from "@ankesh/eslint-config/react";

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
import createNextConfig from "@ankesh/eslint-config/next";

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
import createTailwindConfig from "@ankesh/eslint-config/tailwind";

export default createTailwindConfig();
```

---

## ✨ Tailwind + Prettier

```json
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- ✔ Automatically sorts Tailwind classes
- ✔ Cleaner diffs in PRs

---

## ⚡ Combined Setup (Recommended)

### Next.js + Tailwind

```js
import createNextConfig from "@ankesh/eslint-config/next";
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

- ESLint v9 flat config
- TypeScript support
- Import sorting
- Code quality rules (SonarJS)
- Unicorn best practices
- Prettier compatibility

### React / Next.js

- Hooks enforcement
- JSX best practices
- Next.js Core Web Vitals rules

### Tailwind

- Class order enforcement
- Conflict detection
- Shorthand optimization

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
    "format": "prettier --write ."
  }
}
```

---

## ⚠️ Version Compatibility

| Package           | Version   |
| ----------------- | --------- |
| eslint            | ^9 || ^10 |
| @eslint/js        | ^9 || ^10 |
| typescript-eslint | ^8        |

👉 Recommended: ESLint v9

---

## 💡 Best Practices

- Use `clsx` / `cn` for class composition
- Avoid excessive Tailwind arbitrary values
- Prefer reusable UI components
- Run lint in CI pipelines

---
## 📦 Versioning Strategy

This project follows **Semantic Versioning (SemVer)**:

| Type   | When to use                           | Example  |
|--------|----------------------------------------|----------|
| Patch  | Bug fixes, small improvements          | 0.1.1    |
| Minor  | New features (backward compatible)     | 0.2.0    |
| Major  | Breaking changes                       | 1.0.0    |

### Commands

```bash
npm version patch   # bug fixes
npm version minor   # new features
npm version major   # breaking changes
```

👉 Each command:

- Updates `package.json`
- Creates a Git commit
- Creates a Git tag

---

## 🚀 Publishing Flow

### 1. Build & verify locally

```bash
npm run lint
```

(Optional)

```bash
npm pack
```

👉 Check what files will be published

---

### 2. Login to npm

```bash
npm login
```

---

### 3. Publish package

```bash
npm publish --access public
```

---

### 4. Verify

* Visit: [https://www.npmjs.com/package/@ankesh/eslint-config](https://www.npmjs.com/package/@ankesh/eslint-config)
* Test install:

```bash
npm install @ankesh/eslint-config
```

---

## 🔄 Update & Re-publish

```bash
npm version patch
git push --follow-tags
npm publish
```


---

## 🤝 Contributing

PRs are welcome. For major changes, open an issue first.

---

## 📄 License

MIT

---

## ⭐ Support

If this helped you, consider giving a star ⭐