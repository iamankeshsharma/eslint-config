import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import base from "../base/index.js";

export default defineConfig([
  ...base,
  reactHooks.configs.flat.recommended,
]);