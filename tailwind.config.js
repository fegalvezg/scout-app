/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        scout: {
          bg: "#08080A",
          card: "#101012",
          border: "#1E1E22",
          primary: "#CDFE04",
          value: "#00D1A0",
          best: "#FF6633",
          text: "#EEEEE8",
          muted: "#48484C",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
