const path = require('path')
const webpack = require("webpack");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './example/index'),
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'app.bundle.js'
	},

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},

	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			loaders: ['ts-loader']
		}, {
			test: /\.css$/,
			include: /node_modules/,
			loaders: ['style-loader', 'css-loader']
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loaders: ['file-loader?name=fonts/[name].[ext]']
		}]
	},

	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: {
				baseDir: ['dist']
			}
		}),
		new HtmlWebpackPlugin({
			title: 'Pyrite Prism',
		})
	]
}