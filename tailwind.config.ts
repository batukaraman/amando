import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: "#0A0A0A",
        primary1: "#FEEEE9",
        primary2: "#FCDCD3",
        primary3: "#F9BAA7",
        primary4: "#F7977B",
        primary5: "#F4754F",
        primary6: "#F15223",
        primary7: "#CF3519",
      },
      backgroundImage: {
          'gradient1': 'linear-gradient(to right, #455EFF 0%, #B33BF6 44%, #FF5F14 88%)',
          'gradient2': 'linear-gradient(to right, #FD371F 0%, #FF844B 100%)',
          'gradient3': 'linear-gradient(to right, #1F27FD 0%, #FF844B 100%)',
          'gradient4': 'linear-gradient(to right, #B39FFF 0%, #6A1ED2 100%)',
          'gradient5': 'linear-gradient(to right, #FD1F43 0%, #4BE0FF 100%)',
          'banner': "url('/banner-bg.svg')"
      },
      backgroundSize: {
        'half': '50% 100%',
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
