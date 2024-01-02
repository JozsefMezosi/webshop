/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.tsx", // Note the addition of the `app` directory.
    "./components/**/*.tsx",
    // Or if using `src` directory:
    "../../packages/frontend/**/*.tsx",
  ],
  theme: {
    extend: {
      spacing: {
        "p-test": "4rem",
      },
    },
  },
  plugins: [],
};
