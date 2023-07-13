/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                widescreen: { raw: "(min-aspect-ratio: 3/2)" },
                // Kindle Fire HDX
                tallscreen: { raw: "(max-aspect-ratio: 799/1280)" },
            },
            keyframes: {
                "open-menu": {
                    "0%": { right: "-100vh" },
                    "100%": { right: "0" },
                },
            },
        },
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
        },
    },
    darkMode: "class",
    plugins: [],
}
