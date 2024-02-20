/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {},
	height: {
		heightHeader: '50px',
		heightContent: 'calc(100vh - 100px)',
		heighFooter: '50px'
	},
  },
  plugins: [],
}

