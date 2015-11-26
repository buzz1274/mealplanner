module.exports = {
  styleLoader: require('extract-text-webpack-plugin').extract('style-loader',
                                                              'css-loader!postcss-loader!less-loader'),
  scripts: {
    'transition': true,
  },
  styles: {
  	'normalize': true,
  	'tables': true,
  	'mixins': true,
    'navs': true,
  	"scaffolding": true,
    "grid": true,
  }
};
