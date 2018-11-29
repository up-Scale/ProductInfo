require('ignore-styles');
require('@babel/register')({
    "presets": ["@babel/preset-env","@babel/preset-react"]
});
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

require('./index.js');