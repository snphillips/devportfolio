// eslint.config.mjs (with TypeScript support)
import eslintPkg from "eslint";
const { defineConfig } = eslintPkg;

import js from "@eslint/js";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: { jsx: true },
      globals: { browser: true },
      // Tell ESLint to use the TypeScript parser
      parser: "@typescript-eslint/parser",
    },
    plugins: { js, react, "jsx-a11y": jsxA11y, "@typescript-eslint": tsPlugin },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      // Use TypeScript plugin’s recommended rules: (fallback to its “recommended” if no .flat)
      ...(tsPlugin.configs?.flat?.recommended?.rules ?? tsPlugin.configs.recommended.rules),
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
  },
]);
