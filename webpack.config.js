const path = require('path');
const components_dir = path.join(__dirname, '/react/components');
const dist_dir = path.join(__dirname, '/react/dist');

module.exports = {
  entry: `${components_dir}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: dist_dir
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: components_dir,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};