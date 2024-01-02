export default {
  content: [    
    "./src/*.{js,jsx,ts,tsx}",
    './src/components/**/*.{js,jsx,ts,tsx}',
    "./dist/index.html",
    "./dist/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

