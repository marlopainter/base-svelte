import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			$components: './src/lib/components',
			$css: './src/lib/css',
			$db: './src/lib/db',
			$models: './src/lib/models',
			$stores: './src/lib/stores',
			$types: './src/lib/types',
			$utils: './src/lib/utils',
		},
		env: {
			dir: './src/lib',
		},
		adapter: adapter(),
	},
};
export default config;
