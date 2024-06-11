/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      "dm-sans": "DM Sans, sans-serif",
      "poppins": "Poppins , sans-serif"
    },
    extend: {
      backgroundImage:{
        'hero-img' : "url('https://i2.wp.com/tennisproguru.com/wp-content/uploads/2019/02/tennis-court-1671852_640.jpg?fit=640%2C427&ssl=1')",
      },
      colors: {
        'n-green': {
          '50': '#fbfee7',
          '100': '#f4fccb',
          '200': '#e9fa9c',
          '300': '#d2f24f',
          '400': '#c2e833',
          '500': '#a4ce14',
          '600': '#7fa50b',
          '700': '#607d0e',
          '800': '#4d6311',
          '900': '#415413',
          '950': '#212e05',
        },
        'n-white': {
        '50': '#f8f8f8',
        '100': '#f0f0f0',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
    },
    'n-black': {
        '50': '#f5f6f6',
        '100': '#e6e7e7',
        '200': '#cfd2d2',
        '300': '#aeb2b2',
        '400': '#868a89',
        '500': '#6b6f6e',
        '600': '#5b5f5f',
        '700': '#4e504f',
        '800': '#444645',
        '900': '#3c3d3d',
        '950': '#1b1c1c',
    },
    'n-red': {
        '50': '#fef3ee',
        '100': '#fee4d6',
        '200': '#fbc5ad',
        '300': '#f89c79',
        '400': '#f56942',
        '500': '#f24b27',
        '600': '#e32a13',
        '700': '#bc1d12',
        '800': '#951917',
        '900': '#781816',
        '950': '#41090a',
    },
    

      }
    },
  },
  plugins: [],
}