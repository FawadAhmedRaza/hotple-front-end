/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // dark theme palette
        'light_primary_label': '#333333',
        'light_secondary_label': 'rgba(51,51,51,0.8)',
        'light_tertiary_label': 'rgba(51,51,51,0.6)',
        'light_quaternary_label': 'rgba(51,51,51,0.3)',
        'light_bg_grey': '#F7F7F7',
        'light_link_label': '#13386c',

        // light theme palette 
        'dark_primary_label': '#fff',
        'dark_secondary_label': 'hsla(0,0%,100%,0.8)',
        'dark_tertiary_label': 'hsla(0,0%,100%,0.6)', 
        'dark_quaternary_label': 'hsla(0,0%,100%,0.3)',
        'dark_bg_grey': '#141414',
        'dark_link_label': '#c7daef',

        // utility
        'red': '#ff2e4d',
        'slate': '#363F4D',
        'custom_black': '#0A0A0A'
      },
      fontSize: {
        '26fs': "26px",
        '32fs': "32px",
        '15fs': "15px",
      },
      lineHeight: {
        '54lh': '54px',
        '25lh': '25px',
        '22lh': '22px',
        '18lh': '18px',
        '14lh': '14px',
      },
      fontWeight: {
        550: '550'
      },
      width: {
        '18wd': '18px',
        '22wd': '22px',
        '270wd': '270px',
      },
      height: {
        '92ph ': '92%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
