/** @type {import('tailwindcss').Config} */
// Built with: npx tailwindcss@3 -c tailwind.config.js -i tailwind.input.css -o tailwind.bundle.css --minify
module.exports = {
    "theme": {
      "extend": {
        "fontFamily": {
          "sans": ["Inter", "sans-serif"],
          "display": ["Archivo Black", "sans-serif"]
        },
        "colors": {
          "nhs-blue": "#005EB8",
          "nhs-dark-blue": "#003087",
          "nhs-bright-blue": "#0072CE",
          "alert-red": "#DA291C",
          "safe-green": "#009639",
          "dark-slate": "#231f20"
        }
      }
    },
    "content": ["./index.html", "./poster.js"],
    "safelist": []
  };
