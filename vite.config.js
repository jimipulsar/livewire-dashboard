import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import {bunny} from 'laravel-vite-plugin/fonts';
import tailwindcss from '@tailwindcss/vite';
import livewire from '@defstudio/vite-livewire-plugin'; // Here we import it
import vue from '@vitejs/plugin-vue'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'
import inject from '@rollup/plugin-inject';
export default defineConfig({

    plugins: [
        inject({
            //Remember to add `"jquery": "^3.6.1"` in `dependencies` for `package.json`
            jQuery: "jquery",

            $: "jquery"
        }),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],

            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
            css: {
                postcss: {
                    plugins: {
                        tailwindcss: {},
                        autoprefixer: {},
                    },
                },
            },
            resolve: {
                alias: [{
                    // this is required for the SCSS modules
                    find: /^~(.*)$/, replacement: '(DOLLARSIGN)1',
                },],
            },
        }),
        vue(),
        livewire({  // Here we add it to the plugins
            refresh: ['resources/css/app.css'],
        }),
        tailwindcss(),
    ],

    build: {
        rollupOptions: {

            output: {
                globals: {
                    jquery: 'window.jQuery',
                }
            }
        },
        chunkSizeWarningLimit: 2600
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
    resolve: {
        alias: {
            // this will redirect your import { reactive } from 'vue' request to the correct package
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    }
});
