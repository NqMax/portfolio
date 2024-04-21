import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        primary: "hsl(var(--primary))",
        accent: "hsl(var(--accent))",
        secondary: "hsl(var(--secondary))",

        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [],
};
export default config;
