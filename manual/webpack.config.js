const htmlWebPlug = require('html-webpack-plugin');

module.exports={
    entry: './src/index.js',
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/i,
                use:'babel-loader',
                exclude: /node_modules/,
                resolve:{
                    extensions:['.js','.jsx']
                }
            }
        ]
    },
    plugins:[new htmlWebPlug({template:'./public/index.html'})]
}