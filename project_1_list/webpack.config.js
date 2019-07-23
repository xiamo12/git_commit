const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const htmlPlugin = new htmlWebpackPlugin({
	template: path.join(__dirname, "./dist/index.html"),
	filename: "index.html"
});

module.exports = {
	mode: "production",
	plugins: [htmlPlugin],
	module: {
		rules: [{test: /\.css$/, use:["style-loader","css-loader"]}]
	}
}