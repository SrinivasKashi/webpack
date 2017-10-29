var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry:'./src/js/app.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                //loader: 'css-loader'
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            // we need babel-core, babel-loader ,  babel-preset-env
            // {
            //     test:/\.js$/,
            //     //use:['babel-loader']
            //     use:[
            //         {
            //             loader:'babel-loader',
            //             options:{
            //                 presers:['env']
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            //...
        })
    ]
};