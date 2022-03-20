import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md', '.svelte.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md', '.svelte.md'],
			layout: {
				article: 'src/layouts/article.svelte'
			}
		}),
		sveltePreprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
