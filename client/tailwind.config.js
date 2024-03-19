/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
    theme: {
      extend: {
        colors: {
          'primary':"#004066",
          'secondary' : "#66AAD1",
          'teritory':'#9DD5EE',

        }
      },
      fontFamily: {
        'main' :["Epilogue", "sans-serif"],
        'body' :["Inter", "sans-serif"]
      }
    },
 
  plugins: [],
}

