const path = require('path');

module.exports = (env) => {
  return {
    mode: env || 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },
    optimization: {
      minimize: false
    },
    module: {
      rules: [{
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [{
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }

      ]
    }
  }
};