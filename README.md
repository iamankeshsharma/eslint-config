# @ankesh/eslint-config

Shared ESLint configuration for JavaScript and TypeScript projects.

This package provides a **framework-agnostic, customizable configuration** that enforces modern JavaScript practices, consistent imports, code quality rules, and Prettier compatibility.

## 🚀 Installation

> ⚠️ ESLint ecosystem requires compatible versions. Use the command below to avoid conflicts.

### ✅ Recommended (Stable Setup)

```bash
npm install -D eslint@^9 @eslint/js@^9 typescript-eslint eslint-plugin-import eslint-plugin-unicorn@^63 eslint-plugin-sonarjs eslint-plugin-simple-import-sort eslint-config-prettier github:iamankeshsharma/eslint-config
```

## 📦 Usage

Create an `eslint.config.js` file in your project:

```js
import createConfig from "@ankesh/eslint-config";
export default createConfig();
```

## ⚙️ Customization

You can customize ignores and rules:

```js
import createConfig from "@ankesh/eslint-config";

export default createConfig({
  ignores: ["coverage", "generated"],
  rules: {
    "no-console": "warn",
  },
});
```

## ⚛️ React Usage (Optional)

If you're using React, install additional plugins:

```bash
npm install -D eslint-plugin-react eslint-plugin-react-hooks
```

Then use:

```js
import createReactConfig from "@ankesh/eslint-config/react";

export default createReactConfig();
```

## ⚛️ React + Custom Options

```js
import createReactConfig from "@ankesh/eslint-config/react";

export default createReactConfig({
  ignores: ["coverage"],
  rules: {
    "no-console": "warn",
  },
});
```

## ✨ Included Features

The base configuration includes rules from:

* `@eslint/js`
* `typescript-eslint`
* `eslint-plugin-import`
* `eslint-plugin-unicorn`
* `eslint-plugin-sonarjs`
* `eslint-plugin-simple-import-sort`
* `eslint-config-prettier`

## 🧠 What You Get

* Modern JavaScript best practices
* TypeScript support
* Clean and consistent imports
* Automatic import sorting
* Code quality and maintainability rules
* Seamless Prettier compatibility
* Customizable configuration via options

## ⚠️ Version Compatibility

This config supports:

* `eslint` → `^9 || ^10`
* `@eslint/js` → `^9 || ^10`

**Recommended:** Use ESLint 9 for now (better plugin support)

## 📁 Project Structure

```text
eslint-config/
├ base/
│  └ index.js
├ react/
│  └ index.js
└ package.json
```

## 📄 License

MIT

## 💡 Notes

* This config uses **ESLint Flat Config (v9+)**
* Config is **function-based (factory pattern)** for flexibility
* Uses **peerDependencies**, so your project must install required packages
* Versions are **not auto-managed** — use the recommended install command
* Designed to be **flexible and future-proof**
