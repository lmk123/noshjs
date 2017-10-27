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

rollup
  .rollup({
    input: path.resolve(__dirname, '../libs/index.js'),
    plugins: [buble()]
  })
  .then(bundle => {
    // 输出 umd 格式
    bundle
      .generate({
        format: 'umd',
        name: 'nosh',
        banner
      })
      .then(({ code }) => {
        fs.writeFile(path.resolve(__dirname, '../dist/nosh.js'), code)
        fs.writeFile(
          path.resolve(__dirname, '../dist/nosh.min.js'),
          uglifyJS.minify(code, { output: { comments: /^!/ } }).code
        )
      })

    // 输出 es 格式
    bundle.write({
      file: path.resolve(__dirname, '../dist/nosh.esm.js'),
      format: 'es',
      banner
    })

    // 输出 cjs 格式
    bundle.write({
      file: path.resolve(__dirname, '../dist/nosh.common.js'),
      format: 'cjs',
      banner
    })
  })
