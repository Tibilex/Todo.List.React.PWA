/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		clipPath: {
			myPolygon: 'polygon(0 0, 100% 50%, 75% 100%, 0% 100%)',
		},
		extend: {},
	},
	plugins: [require('tailwind-clip-path')],
}
