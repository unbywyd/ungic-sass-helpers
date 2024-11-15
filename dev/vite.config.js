import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => ({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // Указывает корень проекта как "src"
        },
    },
    build: {
        outDir: "./stylesheets",
        rollupOptions: {
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            }
        }
    },
    css: {
    },
}));
