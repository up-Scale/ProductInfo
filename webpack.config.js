var path = require('path');
var SRC_DIR = path.join(__dirname, '/react-client/src');
var DIST_DIR = path.join(__dirname, '/react-client/dist');
var SERVER_DIR = path.join(__dirname, '/server')
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



module.exports = [{
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'info.bundle.js',
    path: DIST_DIR
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
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
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({   
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
},{
  entry: `${SRC_DIR}/index.js`,
  target: 'node',
  output: {
    filename: 'info.bundleserver.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
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
  },
  plugins: [
    new webpack.DefinePlugin({ 
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({   
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}];