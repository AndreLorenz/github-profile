const webpack = require("webpack");
const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = env => {

    const BUILD_FOLDER = "dist";
    const BUNDLE_NAME = "bundle";
    const START_PAGE = "";
    const DEV_MODE = (env) != "production";

    const configuration = {
        context: path.join(__dirname, "src"),
        entry: [
            "./index.js"
        ],
        output: {
            path: path.join(__dirname, BUILD_FOLDER),
            filename: `${BUNDLE_NAME}.js`,
        },
        module: {
            rules: [{
                    test: /\.html$/,
                    exclude: /node_modules/,
                    use: ["html-loader"]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.(css|scss)$/,
                    use: ["css-hot-loader"].concat(ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [{
                            loader: "css-loader",
                        }, {
                            loader: "sass-loader",
                        }]
                    }))
                },
                {
                    test: /\.(woff2?|ttf|eot)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            name: "./fonts/[hash].[ext]"
                        }
                    }]
                },
                {
                    test: /\.(jpg|png|svg)$/,
                    use: [{
                        loader: "file-loader",
                        options: {
                            name: "./images/[hash].[ext]"
                        }
                    }]
                },
            ]
        },
        resolve: {
            modules: [
                path.join(__dirname, "node_modules"),
            ]
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new ExtractTextPlugin(`${BUNDLE_NAME}.css`),
            new HtmlWebpackPlugin({
                template: "index.html",
                favicon: './assets/icons/favicon.png'
            }),
            new webpack.ProvidePlugin({
                "jQuery": "jquery",
                "jquery": "jquery",
                "$": "jquery",
            })
        ]
    };


    if (DEV_MODE) {

      configuration.devtool = "source-map";
        configuration.devServer = {
            contentBase: false,
            compress: true,
            open: true,
            openPage: START_PAGE,
        };

    }


    if (!DEV_MODE) {

        configuration.plugins.push(new CleanWebpackPlugin([BUILD_FOLDER]));
        configuration.plugins.push(new UglifyJSPlugin());
        configuration.plugins.push(new OptimizeCSSAssets());
        configuration.plugins.push(new CopyWebpackPlugin([{
            from: "./static"
        }]));

    }

    return configuration;
};