import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;

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
      scrollWidth :{
        auto: "auto",
        thin: "thin",
        none: "none"
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          scrollbarColor: (value: any) => {
            const color: string = value;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5), 16);
            const track = [
              "#",
              Math.round(r * 0.6).toString(16),
              Math.round(g * 0.6).toString(16),
              Math.round(b * 0.6).toString(16),
            ].join("");

            return {
              "scrollbar-color": `${color} ${track} `,
            };
          },
        },
        { values: flattenColorPalette(theme("colors")), type: "color" }
      );
      matchUtilities(
        {
          scrollbarWidth: (value: "auto"|"thin"|"none") => {

            return {
              "scrollbar-width": `${value}`,
            };
          },
        },
        { values: theme("scrollWidth") }
      );
    }),
  ],
};
export default config;
