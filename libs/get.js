/**
 * 读取一个对象上指定路径的值
 * @param obj
 * @param {string|string[]} path
 * @param [defaultValue]
 * @return {*}
 */
module.exports = function (obj, path, defaultValue) {
  if (typeof path === 'string') {
    path = parsePath(path)
  }
  for (let i = 0; obj != null && i < path.length; i++) {
    obj = obj[path[i]]
  }
  return obj === undefined ? defaultValue : obj
}

/**
 * 分析对象的路径
 * @param path
 * @return {string[]}
 * Test case: https://jsfiddle.net/lmk123/rofe75tk/
 * jsperf: https://jsperf.com/parse-object-path
 */
function parsePath (path) {
  const arr = []
  const { length } = path
  let chunk = ''
  let bracketStart = false
  for (let i = 0; i < length; i++) {
    const char = path[i]
    switch (char) {
      case '[':
        saveChunk()
        bracketStart = true
        break
      case ']':
        saveChunk()
        break
      case '"':
      case "'":
        // 忽略单/双引号
        break
      case '.':
        if (!bracketStart) {
          saveChunk()
        } else {
          if (path[i - 1] === ']') {
            bracketStart = false
          } else {
            chunk += char
          }
        }
        break
      default:
        chunk += char
        break
    }
  }

  saveChunk()

  return arr

  function saveChunk () {
    if (chunk) {
      arr.push(chunk)
      chunk = ''
    }
  }
}
