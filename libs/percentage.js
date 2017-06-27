import isNumber from './isNumber'

const TRIM_ZERO_REG = /\.?0+$/

/**
 * 将一个小数转换为百分比
 * @param {number|string} number
 * @param {number} [fixed=2]
 * @param [noZero] - 是否去掉末尾的 0
 * @return {string}
 */
export default function (number, fixed = 2, noZero) {
  number = Number(number)
  if (!isNumber(number)) return ''
  let numberString = (number * 100).toFixed(fixed)
  if (noZero) {
    numberString = numberString.replace(TRIM_ZERO_REG, '')
  }
  return numberString + '%'
}
