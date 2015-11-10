

var webpack = require('webpack'),
    path = require('path'),
    HtmlwebpackPlugin = require('html-webpack-plugin'),
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'public');
  
module.exports = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},	
	plugins: [
		new HtmlwebpackPlugin({
			title: 'mealplanner.zz50.co.uk'
		})
	]
};