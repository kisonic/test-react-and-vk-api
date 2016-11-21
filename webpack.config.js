var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: ["babel-polyfill", "./app/index.js"],
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				exclude: [/node_modules/, /dist/]
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!autoprefixer-loader",
				exclude: [/node_modules/, /dist/]
			},
			{
				test: /\.styl$/,
				loader: "style-loader!css-loader!autoprefixer-loader!stylus-loader",
				exclude: [/node_modules/, /dist/]
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: 'app/index.html' }
		])
	]
}
