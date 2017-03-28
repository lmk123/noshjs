const parseNumber = require('./internal/parseNumber')

const KMB_MAP = ['', 'K', 'M', 'B', 'T', 'P', 'E']
const KMB_CEILING = KMB_MAP.length
const SPLIT_COUNT = 3
const SPLIT_NUMBER = Math.pow(10, SPLIT_COUNT)

/**
 * 将数字转换为 kmb 形式
 * @param {number} value
 * @param {number} [fixed=2] - 保留几位小数
 * @return {string}
 * @example kmbt(2211) -> 2.21K
 */
module.exports = function (value, fixed = 2) {
  const num = parseNumber(value)
  if (!num) return ''
  // 整数部分有多少个 3 位
  const count = Math.min(Math.ceil(num.integer.length / SPLIT_COUNT), KMB_CEILING) - 1
  return Number((value / Math.pow(SPLIT_NUMBER, count)).toFixed(fixed)) + KMB_MAP[count]
}
