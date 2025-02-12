import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6500B4',
        'text-primary': '#000000',
        'text-secondary': '#606060',
        'text-muted': '#757575',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
} satisfies Config;
