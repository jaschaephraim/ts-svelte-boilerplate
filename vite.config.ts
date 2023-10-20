/* eslint-disable import/no-extraneous-dependencies */

import { resolve } from 'path';

import { sveltekit } from '@sveltejs/kit/vite';
import { multicssclass } from 'svelte-multicssclass';
import { defineConfig, type PluginOption } from 'vite';


const srcPath = resolve('./src');

export default defineConfig({
	plugins: [multicssclass() as PluginOption, sveltekit()],
	resolve: {
    alias: [
      {
        find: /@\/(.+)/,
        replacement: `${srcPath}/$1`,
      },
    ],
  },
});
