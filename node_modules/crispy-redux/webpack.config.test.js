var webpack = require('webpack')

module.exports = {
    context: __dirname,
    devtool: 'eval',
    entry: {
        index: './__test__/entry.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('test'),
            },
        }),
        new webpack.ProvidePlugin({
            Promise: 'bluebird',
        }),
    ],
    resolve: {
        root: __dirname,
    },
}
