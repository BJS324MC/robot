/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./main.js"],
  theme: {
    extend: {
      keyframes: {
        flow: {
          '0%': { backgroundPosition: '22.5% 50%' },
          '100%': { backgroundPosition: '85% 50%' }
        },
        show: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' }
        },
        up: {
          '0%': { transform: 'translateY(30px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        flow: "flow 10s linear infinite",
        show: "show 1s ease-in-out",
        up: "up 1s ease-in-out"
      },
      fontFamily: {
        kanit: ["kanit", "sans-serif"]
      }
    },
  },
  plugins: [],
}

