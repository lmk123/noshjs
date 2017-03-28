const SYMBOL = ','
const COUNT = 3

/**
 * 将一个数字转换为加了千分位的字符串
 * @param value
 * @return {string}
 * @example thousands(12345.67) => '12,345.67'
 */
module.exports = function (value) {
  const _value = Number(value)
  if (isNaN(_value)) return value
  let s = ''
  let stringValue = String(_value)
  if (stringValue[0] === '-') {
    s = '-'
    stringValue = stringValue.slice(1)
  }
  const decimalIndex = stringValue.indexOf('.')
  const decimal = decimalIndex > 0 ? stringValue.slice(decimalIndex) : '' // 截取小数部分
  const integer = decimalIndex > 0 ? stringValue.slice(0, decimalIndex) : stringValue // 截取整数部分

  const { length } = integer.length
  const x = Math.ceil(length / COUNT)
  const array = []

  for (let i = 0; i < x; i++) {
    array.unshift(integer.slice(-COUNT * (i + 1), length - (COUNT * i)))
  }

  return s + array.join(SYMBOL) + decimal
}
