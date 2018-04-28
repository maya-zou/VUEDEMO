const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
	target: 'web',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.[hash:8].js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader'
			},
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader'
			// 	]
			// },

			{
				test: /\.(gif|jpg|jpeg|png|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1024,
							name: '[name].[ext]'
						}
					}
				]
			},
			// {
			// 	test:/\.ico$/,
			// 	loader:'url-loader?name=images/[name].[ext]'
			// }
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: isDev ? '"development"' : '"production"'
			}
		}),
		new HTMLPlugin({
			// inject:'head',
			template:'./src/index.html',
			favicon:'./src/assets/images/favicon.ico'
		})
	],
	// resolve: {
	// 	alias: {
	// 		vue: 'vue/dist/vue.js',
	// 	}
	// }
}

if (isDev) {
	config.module.rules.push(
		{
			test: /\.styl/,
			use: [
				'style-loader',
				'css-loader',
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: true
					}
				},
				'stylus-loader'
			]
		}
	)
	config.devtool = '#cheap-module-eval-source-map'
	config.mode = "development",
		config.devServer = {
			port: 8080,
			host: '0.0.0.0',
			overlay: {
				errors: true,
			},
			hot: true
		}
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	)
} else {
	// config.mode = "development"	
	config.mode = "production"
	// config.entry = {
	// 	app: path.join(__dirname, 'src/index.js'),
	// 	vendor: ['vue']
	// }
	// config.output.filename = "[name].[chunkhash:8].js"
	config.output.filename = "[name].js"
	config.module.rules.push(
		{
			test: /\.styl/,
			use: ExtractPlugin.extract(
				{
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
							}
						},
						'stylus-loader'
					]
				}
			)
		}
	),
	config.plugins.push(
		new ExtractPlugin('styles.css'),
		// new webpack.optimize.SplitChunksPlugin({
        //     cacheGroups: {
        //         default: {
        //             minChunks: 2,
        //             priority: -20,
        //             reuseExistingChunk: true,
        //         },
        //         //打包重复出现的代码
        //         vendor: {
        //             chunks: 'initial',
        //             minChunks: 2,
        //             maxInitialRequests: 5, // The default limit is too small to showcase the effect
        //             minSize: 0, // This is example is too small to create commons chunks
        //             name: 'vendor'
        //         },
        //         //打包第三方类库
        //         commons: {
        //             name: "commons",
        //             chunks: "initial",
        //             minChunks: Infinity
        //         }
        //     }
		// }),
		// new webpack.optimize.RuntimeChunkPlugin({
        //     name: "runtime"
        // }),
	)
}

module.exports = config