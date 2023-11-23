import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-gray': '#191919',
        'light-gray': '#B4B4B4',
      },
      flex: {
        'flex-full': '0 0 100%',
      },
      screens: {
        lt: '940px',
        ls: '425px',
        ms: '320px',
      },
    },
  },
  plugins: [],
};
export default config;
