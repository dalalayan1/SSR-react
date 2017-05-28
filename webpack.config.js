const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    name: 'ssr',
    target: 'node',
    externals: nodeExternals(),
    entry: './src/SSR-entry.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'SSR-bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [{
                test:/.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                // query:{
                //     presets: ["es2015", "react", "stage-0"]
                // }
            }]
    }
}