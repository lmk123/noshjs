/**
 * 获取对象上一个属性的值
 * @param {*} obj
 * @param {Array} pathArray
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function (obj, pathArray, defaultValue) {
  if (obj == null) return defaultValue

  let value = obj

  for (let i = 0; i < pathArray.length; i += 1) {
    const key = pathArray[i]
    value = value[key]
    if (value == null) {
      return defaultValue
    }
  }

  return value
}
