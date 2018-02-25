const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
// TODO - use extract-text-plugin to seperate css for production builds

module.exports = {
	entry: {
		myAppName: './src/index.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	module: {
		rules: [ 
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ 
						loader: 'css-loader', 
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					},
				]
			},
			{ test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: {} }] }
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}