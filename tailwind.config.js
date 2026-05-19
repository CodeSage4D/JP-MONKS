/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,html}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F1E4D',            // Main deep corporate navy
          'navy-dark': '#070A18',     // Deepest backdrop shade
          blue: '#1E63FF',            // Interactive primary blue
          'blue-hover': '#144FD9',
          orange: '#FF7A1A',          // Controlled CTA accent orange
          'orange-hover': '#E0650B',
          gray: '#5B6475',            // Readable neutral gray
          dark: '#101828',            // Title emphasis dark text
          offwhite: '#FAF9F6',        // Warm neutral visual relief
          border: '#E6EAF2',          // Clean thin dividers
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        title: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 4px 20px -2px rgba(15, 30, 77, 0.03), 0 8px 30px rgba(15, 30, 77, 0.02)',
        'premium-lg': '0 16px 40px -4px rgba(15, 30, 77, 0.05), 0 24px 60px rgba(15, 30, 77, 0.04)',
        'premium-btn': '0 8px 20px -4px rgba(30, 99, 255, 0.15)',
      },
      borderRadius: {
        'premium-sm': '6px',
        'premium-md': '10px',
        'premium-lg': '16px',
        'premium-xl': '24px',
      },
      letterSpacing: {
        'premium-title': '-0.03em',
        'premium-tag': '0.15em',
      }
    },
  },
  plugins: [],
}
