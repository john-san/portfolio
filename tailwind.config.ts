import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customNavy: {
          DEFAULT: '#004175', 
          50: '#e6eef7',
          100: '#cddded',
          200: '#9bb8db',
          300: '#6993ca',
          400: '#376eb8',
          500: '#004175', 
          600: '#003765',
          700: '#002d55',
          800: '#002344',
          900: '#001934',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
