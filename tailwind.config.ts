import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '2rem',
        '2xl': '4rem',
      },
      
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'deep-blue': '	rgba(20, 32, 46, 0.9)',
        'red-alert': 'rgba(255,50,50,1)'
      },
    },

    fontFamily: {
      'hel': ['Helvetica'],
      'fut1': ['Futura', 'sans-serif'],
      // 'comic': ["Comic Sans MS", "Comic Sans"],
      'comic': ['Helvetica'],
      'fut': ['Gill Sans', 'sans-serif'],
    }
  },
  variants: {
    fill: ['hover'],
  },
  plugins: [],
};
export default config;
