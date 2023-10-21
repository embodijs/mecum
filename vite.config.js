import { sveltekit } from '@sveltejs/kit/vite';
import { embodi } from '@embodi/generator/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [embodi(), sveltekit()]
});
