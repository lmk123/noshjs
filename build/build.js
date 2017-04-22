const path = require('path')
const fs = require('fs-extra')

// 清空输出目录
fs.emptyDirSync(path.resolve(__dirname, '../dist'))

// 编译 js
const rollup = require('rollup')
const buble = require('rollup-plugin-buble')
const uglifyJS = require('uglify-js')
const pkg = require('../package.json')

const banner = [
  '/*!',
  ' * nosh.js v' + pkg.version,
  ' * https://github.com/lmk123/noshjs',
  ' * Released under the MIT License.',
  ' */'
].join('\n')

rollup.rollup({
  entry: path.resolve(__dirname, '../libs/index.js'),
  plugins: [buble()]
}).then(bundle => {
  // 输出 umd 格式
  bundle.write({
    dest: path.resolve(__dirname, '../dist/nosh.js'),
    format: 'umd',
    moduleName: 'nosh',
    banner
  }).then(() => {
    // 精简文件
    const code = uglifyJS.minify(path.resolve(__dirname, '../dist/nosh.js'), {
      output: {
        comments: /^!/
      }
    }).code

    fs.writeFile(path.resolve(__dirname, '../dist/nosh.min.js'), code)
  })

  // 输出 es 格式
  bundle.write({
    dest: path.resolve(__dirname, '../dist/nosh.esm.js'),
    format: 'es',
    banner
  })

  // 输出 cjs 格式
  bundle.write({
    dest: path.resolve(__dirname, '../dist/nosh.common.js'),
    format: 'cjs',
    banner
  })
})
