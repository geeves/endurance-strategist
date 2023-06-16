const path = require("path");


// eslint-disable-next-line no-undef
module.exports = {
	entry: "./src/main.tsx",
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
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	output: {
		filename: "strategist.js",
		// eslint-disable-next-line no-undef
		path: path.resolve(`${__dirname}/public/`, "dist")
	},
	devServer: {
		allowedHosts: "auto",
	
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 9000,
	},
	watch: true,
	watchOptions: {
		ignored: '**/node_modules',
	},
};
