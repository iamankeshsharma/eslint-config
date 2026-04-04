import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: importPlugin,
      unicorn,
      sonarjs,
      "simple-import-sort": simpleImportSort,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      prettier,
    ],
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "build",
      "coverage",
      "public",
    ],
    rules: {
      'no-console': 'error',
      
      "import/no-duplicates": "error",

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "unicorn/prefer-array-flat": "error",
      "unicorn/prefer-query-selector": "error",

      "sonarjs/no-duplicate-string": "warn",
      "sonarjs/cognitive-complexity": ["warn", 15],
    },
  },
]);