import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./ui/**/*.{js,ts,jsx,tsx,mdx}",
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
                "blue-active": "var(--blue-active)",
                "blue-hover": "var(--blue-hover)",
                "light-grey": "var(--light-grey)",
            },

            maxWidth: {
                "2xl": "1376px",
            },

            fontSize: {
                xs: ["0.75rem", { lineHeight: "16px" }],
                xl: ["2.3125rem", { lineHeight: "34.34px" }],
            },
        },
    },
    plugins: [],
} satisfies Config;
