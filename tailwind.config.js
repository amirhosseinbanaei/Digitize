module.exports = {
  content: ["./public/**/*.html", "./components/**/**.js"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['vazir', 'sans-serief']
      },
      height:{
        '507p': '507px'
      }
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FB9266",
        },
      },
    ],
  },

  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
}