/* eslint-disable import/no-extraneous-dependencies */

import { sveltekit } from '@sveltejs/kit/vite';
import { multicssclass } from 'svelte-multicssclass';
import { defineConfig, type PluginOption } from 'vite';

export default defineConfig({
  plugins: [multicssclass() as PluginOption, sveltekit()],
});
