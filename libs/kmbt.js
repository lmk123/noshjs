const KMB_MAP = ['', 'K', 'M', 'B', 'T', 'P', 'E']
const KMB_CEILING = KMB_MAP.length - 1
const SPLIT_COUNT = 3
const SPLIT_NUMBER = Math.pow(10, SPLIT_COUNT)

/**
 * 将数字转换为 kmb 形式
 * @param value
 * @param {number} [fixed=2] - 保留几位小数
 * @return {string}
 * @example kmbt(2211) -> 2.21K
 */
module.exports = function (value, fixed) {
  if (typeof fixed !== 'number' || isNaN(fixed)) {
    fixed = 2
  }
  const _value = Number(value)
  if (isNaN(_value)) return value
  let stringValue = String(_value)
  if (stringValue[0] === '-') {
    stringValue = stringValue.slice(1)
  }
  const decimalIndex = stringValue.indexOf('.')
  const integer = decimalIndex > 0 ? stringValue.slice(0, decimalIndex) : stringValue // 截取整数部分
  // 整数部分有多少个 3 位
  const count = Math.min(Math.ceil(integer.length / SPLIT_COUNT), KMB_CEILING) - 1
  return Number((_value / Math.pow(SPLIT_NUMBER, count)).toFixed(fixed)) + KMB_MAP[count]
}
