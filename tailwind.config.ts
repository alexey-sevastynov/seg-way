import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        screens: {
          "2xl": "1376px",
        },
      },

      colors: {
        white: "var(--white)",
        grey: "var(--grey)",
      },

      maxWidth: {
        "2xl": "1376px",
      },
    },
  },
  plugins: [],
} satisfies Config;
