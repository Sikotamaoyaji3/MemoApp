import globals from "globals";
import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact, { rules } from "eslint-plugin-react";


export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.node } },
  rules, {
    "semi": ["error", "always"],
    "quotes": ["warn", "double"],
    "no-console": ["error"]
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
