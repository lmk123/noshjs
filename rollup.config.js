const path = require('path')
const buble = require('rollup-plugin-buble')
const commonjs = require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify')
const pkg = require('./package.json')

const config = {
  entry: path.resolve(__dirname, './index.js'),
  banner: [
    '/*!',
    ' * dish.js v' + pkg.version,
    ' * https://github.com/lmk123/dish',
    ' * Released under the MIT License.',
    ' */'
  ].join('\n'),
  format: 'umd',
  moduleName: 'dish',
  plugins: [buble(), commonjs()]
}

if (process.env.MIN) {
  config.dest = 'dist/dish.min.js'
  config.plugins.push(uglify({
    output: {
      comments: /^!/
    }
  }))
} else {
  config.dest = 'dist/dish.js'
}

module.exports = config
