import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'EMEA Entrepreneurs',
			social: {
				github: 'https://github.com/emeatech/',
			},
			sidebar: [
				{
					label: 'Anti advice',
					autogenerate: { directory: 'anti' },
				},
				{
					label: 'South Africa',
					autogenerate: { directory: 'south-africa' },
				},
			],
		}),
	],
});
