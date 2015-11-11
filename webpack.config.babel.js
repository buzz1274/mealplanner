var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");    
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'public/build');
  
module.exports = {
	cache: true,
	entry: APP_PATH+"/main.jsx",
	output: {
		path: BUILD_PATH,
		filename: 'main.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: path.resolve('./'),
		alias: {
			jquery: "node_modules/jquery/dist/jquery.js"
		}
	},	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				include: APP_PATH
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: 'url-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
		]
	},	
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		}),
		new ExtractTextPlugin("main.css", {allChunks: true})
	]
};