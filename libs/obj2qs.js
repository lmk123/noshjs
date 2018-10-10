const { hasOwnProperty } = Object.prototype

/**
 * 将一个对象转换成查询字符串
 * @param {object} obj
 * @param {string} [prefix]
 * @return {string}
 */
export default function (obj, prefix = '') {
  const qs = []
  for (let key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      qs.push(key + '=' + encodeURIComponent(obj[key]))
    }
  }
  return prefix + qs.join('&')
}
