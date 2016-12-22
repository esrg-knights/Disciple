const path = require('path');
const merge = require('webpack-merge');


module.exports = (config) => {
  const entry = path.join(__dirname, 'config/karma/webpack-entry.js');

  config.set({
    frameworks: ['mocha', 'sinon'],
    browsers: ['Chrome'],
    files: [entry],
    preprocessors: {
      [entry]: ['webpack', 'sourcemap'],
    },
    reporters: [
      'progress',
      'coverage',
    ],
    coverageReporter: {
      reporters: [
        { type: 'text' },
        { type: 'html' },
      ],
    },
    webpack: merge(require('./webpack.config'), {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              plugins: [
                ['istanbul', {
                  exclude: [
                    '!app/**',
                    '**/*.spec.js?',
                  ],
                }],
              ],
            },
          },
        ],
      },
    }),
    webpackServer: {
      noInfo: true,
    },
  });
};
