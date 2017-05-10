/* global __dirname, require, module*/

// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env  = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'Library';

let plugins = [], outputFile;
// plugins.push(new ExtractTextPlugin('[name].css'));

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    classnames: {
      commonjs: 'classnames',
      commonjs2: 'classnames',
      amd: 'classnames',
      root: 'classnames',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(`${__dirname}/src`),
        exclude: /node_modules/,
        loader: [
          'babel-loader?cacheDirectory=true,presets[]=es2015,presets[]=react,presets[]=stage-2',
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(`${__dirname}/src`),
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

module.exports = config;
