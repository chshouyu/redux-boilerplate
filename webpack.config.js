var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var isProduction = process.env.NODE_ENV === 'production';

function getEntrySources(sources) {
    if (!isProduction) {
        sources.unshift('webpack/hot/only-dev-server');
        sources.unshift('webpack-dev-server/client?http://localhost:8080');
    }
    return sources;
}

function getJSLoaders(loaders) {
    if (!isProduction) {
        loaders.unshift('react-hot');
    }
    return loaders;
}

module.exports = {
    entry: {
        index: getEntrySources([
            './static/js/index'
        ]),
        vendor: ['react']
    },
    output: {
        path: './dest/',
        filename: '[name].js',
        chunkFilename: "[id].js",
        publicPath: '/dest/',
        jsonpFunction: '__wpjp_'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            loaders: getJSLoaders([
                'babel-loader?presets[]=es2015,presets[]=react&+cacheDirectory'
            ])
        }]
    },
    plugins: [
        new Clean(['dest']),
        new CommonsChunkPlugin('vendor', 'vendor.js')
    ]
};