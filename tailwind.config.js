/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html",
  "./src/scripts/**/*.js"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    
    extend: {
      fontFamily:{
        lato: 'Lato',
        inter: 'Inter',
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
}
