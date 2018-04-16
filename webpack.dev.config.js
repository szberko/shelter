var webpack = require('webpack');
var path = require('path');

console.log(__dirname, '/app/index.js');

module.exports = {
	entry: [
		path.join(__dirname, '/app/index.js')
    ],
    
    module: {
		rules: [{
			test: /\.(js|jsx)$/, 
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader",
					options: {
						includePaths: [path.join(__dirname, '/scss/first.scss')]
					}
				}]
			}
		]
    },
    
    output: {
        path:path.join(__dirname, 'dist'),
        filename: 'bundle.js'
		},

	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	},

	mode: 'development'
}