const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index_bundle.js',
		publicPath:'/'
	},
	target: 'web',
	devServer: {
		port: '5000',
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'public')
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/, 
				use: 'babel-loader', 
			},
			{
        test: /\.(png|jpe?g|gif|pdf|svg|webp)$/i,
        use: 'url-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/i,
        use: ['style-loader','css-loader', 'postcss-loader', 'sass-loader'],
      },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html')
		})
	]
};