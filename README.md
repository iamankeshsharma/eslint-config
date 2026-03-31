# @ankesh/eslint-config

Shared ESLint configuration for JavaScript and TypeScript projects.

This package provides a **framework-agnostic base configuration** that enforces modern JavaScript practices, consistent imports, code quality rules, and Prettier compatibility.

---

## Installation

Install the config and required peer dependencies.

```bash
pnpm add -D eslint github:iamankeshsharma/eslint-config @eslint/js typescript-eslint eslint-plugin-import eslint-plugin-unicorn eslint-plugin-sonarjs eslint-plugin-simple-import-sort eslint-config-prettier
```

---

## Usage

Create an `eslint.config.js` file in your project.

```js
import base from "github:iamankeshsharma/eslint-config/base";

export default [
  ...base
];
```

This enables:

* ESLint recommended rules
* TypeScript rules
* import validation
* automatic import sorting
* code quality rules
* Prettier compatibility

---

## React Usage (Optional)

If you are using React, install React ESLint plugins.

```bash
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks
```

Then extend your config:

```js
import base from "github:iamankeshsharma/eslint-config/base";
import react from "github:iamankeshsharma/eslint-config/react";

export default [
  ...base,
  ...react
];
```

---

## Included Features

The base configuration includes rules from:

* `@eslint/js`
* `typescript-eslint`
* `eslint-plugin-import`
* `eslint-plugin-unicorn`
* `eslint-plugin-sonarjs`
* `eslint-plugin-simple-import-sort`
* `eslint-config-prettier`

These rules enforce:

* modern JavaScript patterns
* safe imports
* complexity limits
* consistent import ordering
* compatibility with Prettier formatting

---

## Project Structure

```
eslint-config/
├ base/
│  └ index.js
├ react/
│  └ index.js
└ package.json
```

---

## License

MIT
