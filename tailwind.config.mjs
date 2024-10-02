/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				banner: "url('/src/assets/images/banner.jpg')",
			},
			colors: {
				primary: "#ed7681",
				agro: {
					dark: "#ece58d",
					light: "#f7f4d5",
				},
			},
			fontFamily: {
                'body' : ['"Neue Regrade"', 'sans-serif'],
                'display' : ['Birdgo', 'sans-serif'],
            }
		},
	},
	plugins: [],
}
