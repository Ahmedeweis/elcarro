// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        racing: {
          DEFAULT: '#E50000',
          dark: '#C20000',
        },
        carbon: {
          DEFAULT: '#0A0A0A',
          light: '#111111',
        },
        charcoal: '#111111',
        dimgray: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'Syne', 'Audiowide', 'sans-serif'],
        headline: ['"Space Grotesk", "Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
