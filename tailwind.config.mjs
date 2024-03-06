import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				'sans': ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"my-body": "rgb(248, 248, 248)",
				"my-white": "#e1e1e1",
				"my-black": "#313131",
				"my-primary": "rgb(59, 130, 246)",
				"my-hover": "rgb(16, 16, 148)",
			},
			spacing: {
				"header-desktop": "3.5rem",
				"header-movil": "4.5rem",
			},
			boxShadow: {
				'my-shadow': '0 0.25rem 0.5rem rgba(0, 0, 0, 0.5)',
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
