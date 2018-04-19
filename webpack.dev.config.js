var webpack = require('webpack');
var path = require('path');

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
					loader: "css-loader",
					options: {
						sourceMap: true
					}
				}, {
					loader: "sass-loader",
					options: {
						sourceMap: true
					},
				}]
			},
			{ 
			test: /\.(png|jpg|otf)$/,
				loader: 'url-loader' 
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