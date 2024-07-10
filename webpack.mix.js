const mix = require('laravel-mix');
require('laravel-mix-esbuild');

mix.js('resources/js/app.js', 'public/js')
   .react() // Ajoute le support pour React et JSX
   .sass('resources/sass/app.scss', 'public/css')
   .version();

mix.esbuild({
    loader: { '.js': 'jsx' },
    target: 'es2015'
});

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
});
