var webpack = require('webpack');

module.exports = {
    entry: './src/Index.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: "underscore",
            $: "jquery",
            Backbone: "backbone"
        })
    ],
    module: {
        loaders: [
            {test: /\.tsx?$/, loader: 'ts-loader'},
            { test: /\.ejs$/, loader: 'ejs-loader' }
        ]
    }
};