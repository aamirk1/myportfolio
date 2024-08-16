/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      'xs-mx': {'max':'475px'},
      'sm-mx': {'max':'639px'},
      'md-mx': {'max':'767px'},
      'lg-mx': {'max':'1023px'},
      'xl-mx': {'max':'1279px'},
      '2xl-mx': {'max':'1535px'},
    },
    colors: {
      bgColor: "#0A192F",
      primaryColor: "#64FFDA",
      textColor: "#8892B0",

    }
  },
  plugins: [],
}

