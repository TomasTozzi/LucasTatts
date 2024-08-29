/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/src/assets/bg-home.jpg')", // Ensure the path matches your file location
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
