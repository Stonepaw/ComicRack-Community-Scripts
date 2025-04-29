import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		csp: {
			directives: {
				'script-src': ['self']
			},
			// must be specified with either the `report-uri` or `report-to` directives, or both
			reportOnly: {
				'script-src': ['self'],
				'report-uri': ['/']
			}
		}
	}
};

export default config;
