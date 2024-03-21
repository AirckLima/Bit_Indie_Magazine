import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        uxs: "0.56rem",
      },
      fontFamily: {
        honk: [
          '"Honk",  system-ui',
          { fontVariationSettings: '"MORF" 45, "SHLN" 0' },
        ],
        kode: ['"Kode Mono",  monospace'],
        lexend: ['"Lexend", sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
