var path = require('path');

module.exports = {
    entry: './index.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                // question mark means x is optional
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {optional: 'runtime', cacheDirectory: true}
            },
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.json/, loader: 'json'}
        ]
    }
};
