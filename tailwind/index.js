import tailwindcss from "eslint-plugin-tailwindcss";
import { defineConfig } from "eslint/config";
import createBaseConfig from "../base/index.js";

export default function createTailwindConfig(options = {}) {
  const {
    rules = {},
    settings = {},
  } = options;

  return defineConfig([
    ...createBaseConfig(options),

    {
      plugins: {
        tailwindcss,
      },

      settings: {
        tailwindcss: {
          callees: ["clsx", "cn"],
          config: "tailwind.config.js",
          ...settings,
        },
      },

      rules: {
        // core rules
        "tailwindcss/classnames-order": "warn",
        "tailwindcss/no-contradicting-classname": "error",
        "tailwindcss/enforces-shorthand": "warn",

        // enterprise-level controls (tweak as needed)
        "tailwindcss/no-arbitrary-value": "off",
        "tailwindcss/no-custom-classname": "off",

        ...rules,
      },
    },
  ]);
}