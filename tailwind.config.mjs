/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		fontFamily: {
			sans: 'var(--font-sans)',
			serif: 'var(--font-serif)'
		},
		extend: {
			colors: {
				bgColor: 'var(--bgColor)',
				brightRed: 'var(--brightRed)',
				darkGray: 'var(--darkGray)',
				veryLightGray: 'var(--veryLightGray)',
				navColor: 'var(--navColor)',
				primary: {
					50: '#F8F8F8',
					100: '#ECECEC',
					200: '#DADADA',
					300: '#BDBDBD',
					400: '#9E9E9E',
					500: '#7E7E7E',
					600: '#626262',
					700: '#494949',
					800: '#323232',
					900: '#1F1F1F',
					950: '#121212'
				},
				accent: {
					50: '#FFF7FA',
					100: '#FFEAF0',
					200: '#FFD5E1',
					300: '#FFBACD',
					400: '#FF9EB8',
					500: '#FF83A3',
					600: '#FF678E',
					700: '#F54D78',
					800: '#E73564',
					900: '#D11D50',
					950: '#BB053A'
				}
			}
		}
	},
	plugins: []
}
