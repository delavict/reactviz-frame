
var syntax = require('postcss-scss');
module.exports = {
  parser: syntax,
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
      warnForDuplicates: false
    },
    'cssnano': {}
  }
}