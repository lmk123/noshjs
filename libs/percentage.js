import isNumber from './isNumber'

/**
 * 将一个小数转换为百分比
 * @param {number|string} number
 * @param {number} [fixed=2]
 * @return {string}
 */
export default function (number, fixed = 2) {
  number = Number(number)
  if (!isNumber(number)) return ''
  let numberString = (number * 100).toFixed(fixed)
  return parseFloat(numberString) + '%'
}
