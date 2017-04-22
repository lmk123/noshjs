const { hasOwnProperty } = Object.prototype

/**
 * 将一个对象转换成查询字符串
 * @param obj
 * @return {string}
 */
export default function (obj) {
  let qs = ''
  for (let key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      qs += key + '=' + encodeURIComponent(obj[key])
    }
  }
  return qs
}
