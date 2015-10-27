var path = require('path');
module.exports = {
    entry: './index.js',
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
                // ?cacheDirectory is babel option (https://github.com/babel/babel-loader#options)
                loader: 'babel-loader?cacheDirectory'
            }
        ]
    }
};
