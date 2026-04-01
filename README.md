# @ankesh/eslint-config

Shared ESLint configuration for JavaScript and TypeScript projects.

This package provides a **framework-agnostic base configuration** that enforces modern JavaScript practices, consistent imports, code quality rules, and Prettier compatibility.

---

## 🚀 Installation

> ⚠️ ESLint ecosystem requires compatible versions. Use the command below to avoid conflicts.

### ✅ Recommended (Stable Setup)

```bash
pnpm add -D eslint@^9 @eslint/js@^9 typescript-eslint eslint-plugin-import eslint-plugin-unicorn@^63 eslint-plugin-sonarjs eslint-plugin-simple-import-sort eslint-config-prettier github:iamankeshsharma/eslint-config
```

---

## 📦 Usage

Create an `eslint.config.js` file in your project:

```js
import base from "@ankesh/eslint-config";

export default [
  ...base
];
```

---

## ⚛️ React Usage (Optional)

If you're using React, install additional plugins:

```bash
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks
```

Then extend your config:

```js
import base from "@ankesh/eslint-config";
import react from "@ankesh/eslint-config/react";

export default [
  ...base,
  ...react
];
```

---

## ✨ Included Features

The base configuration includes rules from:

* `@eslint/js`
* `typescript-eslint`
* `eslint-plugin-import`
* `eslint-plugin-unicorn`
* `eslint-plugin-sonarjs`
* `eslint-plugin-simple-import-sort`
* `eslint-config-prettier`

---

## 🧠 What You Get

* Modern JavaScript best practices
* TypeScript support
* Clean and consistent imports
* Automatic import sorting
* Code quality and maintainability rules
* Seamless Prettier compatibility

---

## ⚠️ Version Compatibility

This config supports:

* `eslint` → `^9 || ^10`
* `@eslint/js` → `^9 || ^10`

👉 **Recommended:** Use ESLint 9 for now (better plugin support)

---

## 🛠 Troubleshooting

### ❌ Dependency conflicts (ERESOLVE)

If you see install errors:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### ❌ ESLint version issues

Make sure your project uses compatible versions:

```bash
pnpm list eslint @eslint/js
```

Expected:

```text
eslint 9.x
@eslint/js 9.x
```

---

## 📁 Project Structure

```text
eslint-config/
├ base/
│  └ index.js
├ react/
│  └ index.js
└ package.json
```

---

## 📄 License

MIT

---

## 💡 Notes

* This config uses **peerDependencies**, so your project must install required packages
* Versions are **not auto-managed** — use the recommended install command
* Designed to be **flexible and future-proof**
