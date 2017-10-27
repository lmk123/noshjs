import isNumber from './isNumber'

/**
 * 将一个小数转换为百分比
 * @param {number|string} number
 * @param {number} [fixed=2]
 * @return {string}
 */
export default function (value, fixed = 2) {
  const number = Number(value)
  if (!isNumber(number)) return value
  let numberString = (number * 100).toFixed(fixed)
  return parseFloat(numberString) + '%'
}
