import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        kwWhite: "#f0efee",
        kwRed: "#CE5025",
        kwGreen: "#60923A",
        kwBlue: "#486686",
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      scale: {
        '1': '2',
        '101': '1.01',
      },
    },
  },
  plugins: [],
} satisfies Config;
