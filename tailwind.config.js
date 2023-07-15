/** @type {import('tailwindcss').Config} */
module.exports = {
	
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}',
	],
	theme: {
		extend: {
			colors: {
				"gluPurple": {
					DEFAULT: '#4F345A',
					50: '#E3D8E8',
					100: '#DACBE1',
					200: '#C8B1D2',
					300: '#B697C3',
					400: '#A47DB4',
					500: '#9263A5',
					600: '#7C528E',
					700: '#664374',
					800: '#4F345A',
					900: '#301F36',
					950: '#201525'
				},
				"gluOrange": {
					DEFAULT: '#FFB845',
					50: '#FFEFD4',
					100: '#FFE7BF',
					200: '#FFD797',
					300: '#FFC86E',
					400: '#FFB845',
					500: '#FFA30D',
					600: '#D48300',
					700: '#9C6000',
					800: '#643E00',
					900: '#2B1B00',
					950: '#0F0A00'
				},
				"gluBlue": {
					DEFAULT: '#37718E',
					50: '#BFD9E6',
					100: '#B0D1E1',
					200: '#93BFD5',
					300: '#76AECA',
					400: '#589CBE',
					500: '#4288AB',
					600: '#37718E',
					700: '#275166',
					800: '#18313D',
					900: '#081015',
					950: '#000000'
				},

			}
		},
	},
	plugins: [],
}
