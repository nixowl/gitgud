const { overrides } = require("eslint-config-next")
/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint", "tailwindcss"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [
    {
      files: ["./src/components/ui/**/*.tsx"],
      rules: {
        "tailwindcss/classnames-order": "off",
        "tailwindcss/no-custom-classname": "off",
      },
    },
    {
      files: ["./src/hooks/**/*.ts"],
      rules: {
        "@typescript-eslint/non-nullable-type-assertion-style": "off",
      },
    },
  ],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
}

module.exports = config
