/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",
            "./views/**/*.{html,js,handlebars}"],
  theme: {
    extend: {
      backgroundImage: {
        'people_working': "url('/images/people_working.png')",
        'sh_logo': "url('/images/sh_logo.png')",
        'logo': "url('/images/logo.jpg')",
        'sh_logo2': "url('/images/sh_logo_v2.png')"
      }
    }
  },
  plugins: [],
}

