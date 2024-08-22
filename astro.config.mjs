import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://docs.ritza.co',
	integrations: [
		starlight({
			title: 'Ritza Documentation',
            head: [
                {
                  tag: 'script',
                  attrs: {
                    src: 'https://plausible.io/js/script.js',
                    'data-domain': 'docs.ritza.co',
                    defer: true
                  }
            }],
			social: {
				github: 'https://github.com/ritza-co/docs.ritza.co/',
			},
			sidebar: [
				{
					label: 'Getting started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'How to',
					autogenerate: { directory: 'how-tos' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
