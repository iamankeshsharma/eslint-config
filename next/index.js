import { defineConfig } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import createBaseConfig from "../base/index.js";

export default function createNextConfig(options = {}) {
  const { rules = {} } = options;

  return defineConfig([
    ...createBaseConfig(options),

    {
      files: ["**/*.{js,jsx,ts,tsx}"],

      plugins: {
        "@next/next": nextPlugin,
        react: reactPlugin,
        "react-hooks": reactHooks,
      },

      languageOptions: {
        parserOptions: {
          ecmaFeatures: { jsx: true },
        },
      },

      settings: {
        react: {
          version: "detect",
        },
      },

      rules: {
        // Next.js core rules
        ...nextPlugin.configs.recommended.rules,
        ...nextPlugin.configs["core-web-vitals"].rules,

        // React rules
        ...reactPlugin.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,

        // Your opinionated additions
        "react/react-in-jsx-scope": "off", // not needed in Next.js
        "react/prop-types": "off", // using TS mostly
        "react/jsx-uses-react": "off",

        // override support
        ...rules,
      },
    },
  ]);
}