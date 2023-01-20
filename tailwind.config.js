/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "hsl(220, 98%, 61%)",
        "primary-gradient": "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": "hsl(233, 11%, 84%)",
        "dark-grayish-blue": " hsl(236, 9%, 61%)",
        "very-dark-grayish-blue": "hsl(235, 19%, 35%)"
      },
      backgroundImage: {
        'desktop-light': "url('../src/assets/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('../src/assets/images/bg-desktop-dark.jpg')",
        'mobile-light': "url('../src/assets/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('../src/assets/images/bg-mobile-dark.jpg')"


      }
    },
  },
  plugins: [],
}