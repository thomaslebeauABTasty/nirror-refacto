var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');

module.exports = [{
    entry  : './client/nirrorClient.js',
    output : {
        path     : __dirname + "/public",
        filename : 'bundle.js'
    },
    module : {
        loaders: [
            {
                test   : /.js$/,
                loader : 'babel-loader'
            },
            {
                 test   : /.node$/,
                 loader : 'node-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.json', '.jsx', '.es6', '.babel', '.node'],
        moduleExtensions: [ 'node_modules', 'app' ]
    },
    plugins: [
        new webpack.DefinePlugin({ 'typeof window': '\"object\"' })
    ]
},
{
    entry  : './app/server.js',
    output : {
        path     : __dirname + "/back",
        filename : 'bundle.js'
    },
    module : {
        loaders: [ {
                test   : /.js$/,
                loader : 'babel-loader'
            }
        ]
    },
    target: 'node',
    externals: [nodeExternals()]
}];
