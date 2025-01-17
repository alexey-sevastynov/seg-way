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
        blue: "var(--blue)",
      },

      maxWidth: {
        "2xl": "1376px",
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "16px" }],
      },
    },
  },
  plugins: [],
} satisfies Config;
