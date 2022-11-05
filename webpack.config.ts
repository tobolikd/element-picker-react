import path from 'path'

import webpack from 'webpack'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import CopyPlugin = require('copy-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

const sourceDirectory = path.join(__dirname, 'src')
const outputDirectory = path.join(__dirname, 'dist')

const webpackConfig: webpack.Configuration = {
	watch: isDevelopment,
	mode: isDevelopment ? 'development' : 'production',
	devtool: 'inline-source-map',
	entry: {
		'popup': path.join(sourceDirectory, 'popup/index.tsx'),
		'content': [
			path.join(sourceDirectory, 'content/index.tsx'),
			// https://github.com/pacexy/mv3-hot-reload#1-inject-the-code-for-hot-reloading
			...(isDevelopment ? ['mv3-hot-reload/content'] : []),
		],
		'service-worker': [
			path.join(sourceDirectory, 'service-worker/index.ts'),
			...(isDevelopment ? ['mv3-hot-reload/background'] : []),
		],
	},
	output: {
		path: outputDirectory,
		filename: '[name].js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: {
								exportLocalsConvention: 'camelCase',
							},
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [new TsconfigPathsPlugin()],
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(sourceDirectory, 'popup/popup.html'),
					to: path.resolve(outputDirectory, 'popup.html'),
				},
				{
					from: path.resolve(sourceDirectory, 'manifest.json'),
					to: path.resolve(outputDirectory, 'manifest.json'),
				},
				{
					from: path.resolve(sourceDirectory, 'assets'),
					to: path.resolve(outputDirectory),
				},
			],
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.MV3_HOT_RELOAD_PORT': JSON.stringify(process.env.MV3_HOT_RELOAD_PORT ?? null),
		}),
	],
}

export default webpackConfig
