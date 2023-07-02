/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        paleBlue: {
          '100': 'hsl(225, 100%, 98%)',
          '200': 'hsl(225, 100%, 94%)',
          '300': 'hsl(224, 23%, 55%)',
          '500': 'hsl(245, 75%, 52%)',
          '900': 'hsl(223, 47%, 23%)'
        }
      },
      fontFamily: {
        rhd: ['var(--font-RHD)']
      }
    },
  },
  plugins: [],
}
