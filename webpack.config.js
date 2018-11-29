var path = require('path');
var SRC_DIR = path.join(__dirname, '/react-client/src');
var DIST_DIR = path.join(__dirname, '/react-client/dist');
var SERVER_DIR = path.join(__dirname, '/server')
var webpack = require('webpack');

module.exports = [{
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'info.bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          "presets": ["@babel/preset-env","@babel/preset-react"]
       }
      }
    ]
  }
},{
  entry: `${SRC_DIR}/index.js`,
  target: 'node',
  output: {
    filename: 'info.bundleserver.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',  
        query: {
          "presets": ["@babel/preset-env","@babel/preset-react"]
        },
      }
    ],
  }
}];