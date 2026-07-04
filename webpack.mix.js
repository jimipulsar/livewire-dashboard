const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').sourceMaps()

    .postCss('resources/css/app.css', 'public/css', [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
    ]);

mix.copyDirectory('vendor/tinymce/tinymce', 'public/js/tinymce');

mix.webpackConfig({
    stats: {
        children: true,
    },
});
mix.disableNotifications();
