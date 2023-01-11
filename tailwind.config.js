/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		extend: {
			backgroundImage: {
				emergency: "url('../public/images/eBg.jpg')",
				appointment: "url('../public/images/aBg.jpg')",
				other: "url('../public/images/oBg.jpg')",
			},
		},
	},
	plugins: [],
};
