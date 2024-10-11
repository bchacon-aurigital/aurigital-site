/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "-1px 0.1px 10px rgba(255, 255, 255, 0.3) , 1px -0.1px 10px rgba(255, 255, 255, 0.3),1px 0.1px 6px rgba(0, 0, 0, 0.25) ,-1px -0.1px 10px rgba(255, 255, 255, 0.3) ",
      },
    },
  },
  plugins: [],
};
