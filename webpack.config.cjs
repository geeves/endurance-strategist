const path = require("path");


// eslint-disable-next-line no-undef
module.exports = {
	entry: "./src/main.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "strategist.js",
		// eslint-disable-next-line no-undef
		path: path.resolve(`${__dirname}/public/`, "dist"),
		assetModuleFilename: './[hash][ext][query]'
	},
	devtool: "inline-source-map",
	devServer: {
		allowedHosts: "auto",
	
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 9000,
	},
	cache: false,
	watch: false,
	watchOptions: {
		ignored: '**/node_modules',
		followSymlinks: true,
	},
	snapshot: {
		managedPaths: [],
		immutablePaths: [],
	},
};
