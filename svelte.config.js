import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		
		vite: {
			resolve: {
				alias: {
					$i18n: path.resolve('./src/i18n'),
					$lib: path.resolve('./src/lib'),
				},
			},
		},
	},
}

export default config
