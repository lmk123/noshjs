/**
 * 将一个小数转换为百分比
 * @param {*} value
 * @param {number} [fixed=2]
 * @return {string|null}
 */
export default function (value, fixed = 2) {
  const number = parseFloat(value)
  if (isNaN(number)) return null
  let numberString = (number * 100).toFixed(fixed)
  return parseFloat(numberString) + '%'
}
