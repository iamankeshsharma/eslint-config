import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import createBaseConfig from "../base/index.js";

export default function createReactConfig(options = {}) {
  return defineConfig([
    ...createBaseConfig(options),
    reactHooks.configs.flat.recommended,
  ]);
}