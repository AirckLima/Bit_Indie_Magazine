/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                "uxs": "0.56rem"
            },
            fontFamily: {
                "honk": ['"Honk",  system-ui' , {fontVariationSettings: '"MORF" 45, "SHLN" 0' }],
                "kode": ['"Kode Mono",  monospace'],
                "lexend": ['"Lexend", sans-serif'],
            },
        },
    },
    plugins: [],
};
