/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', '"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        midnight: '#0f172a',
        accent: '#00f5a0',
        accentDeep: '#00c2ff',
        sand: '#f7f1e3'
      },
      boxShadow: {
        glass: '0 10px 40px rgba(0,0,0,0.2)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};
