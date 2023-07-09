const MiniCssEtractPlugin = require("mini-css-extract-plugin");
let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}
module.exports = {
  mode, //env change - prod or dev,QA ,etc..
  plugins: [new MiniCssEtractPlugin()], //add plugin
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test:/\.css$/i, //get all css files
        use: [MiniCssEtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: "source-map", //currect error path visibale
  devServer: {
    static: "./dist",
    hot: true, //stop page reload
  },
};
