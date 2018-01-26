// node core dependencies
const path = require('path');
const fs = require('fs');

// node dependencies
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let options = {
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.join(__dirname + '/', 'dist'),
    filename: 'emojicloud.js'
  },
  plugins: [
    // new UglifyJsPlugin(),
    new CopyWebpackPlugin([
      { from: './node_modules/jqcloud2/dist/jqcloud.min.js', to: 'jqcloud.min.js' }])
  ],
  // externals: nodeModules()
}

function nodeModules() {
  let nodeModulesList = {};
  fs.readdirSync('node_modules').filter(x => ['.bin'].indexOf(x) === -1).forEach(mod => nodeModulesList[mod] = 'commonjs ' + mod);
  return nodeModulesList;
}

module.exports = options;