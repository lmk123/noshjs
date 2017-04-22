import isNumber from '../isNumber'

/**
 * 解析一个数字的各个部分
 * @param {number} number
 * @return {{minus: boolean, integer: string, decimal: string}|undefined}
 */
export default function (number) {
  if (!isNumber(number)) return
  let minus = false
  let stringValue = String(number)
  if (stringValue[0] === '-') {
    minus = true
    stringValue = stringValue.slice(1)
  }
  const decimalIndex = stringValue.indexOf('.')
  const integer = decimalIndex > 0 ? stringValue.slice(0, decimalIndex) : stringValue // 截取整数部分
  const decimal = decimalIndex > 0 ? stringValue.slice(decimalIndex) : '' // 截取小数部分
  return {
    minus,
    integer,
    decimal
  }
}
