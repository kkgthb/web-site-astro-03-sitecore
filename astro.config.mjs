import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    outDir: './dist',
});