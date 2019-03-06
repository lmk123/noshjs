import parseNumber from './internal/parseNumber'

const SYMBOL = ','
const COUNT = 3

/**
 * 将一个数字转换为加了千分位的字符串
 * @param {*} value
 * @return {string|null}
 * @example thousands(12345.67) => '12,345.67'
 */
export default function (value) {
  const num = parseNumber(value)
  if (!num) return null
  const {
    minus,
    integer,
    decimal
  } = num
  const { length } = integer
  const x = Math.ceil(length / COUNT)
  const array = []

  for (let i = 0; i < x; i++) {
    array.unshift(integer.slice(-COUNT * (i + 1), length - (COUNT * i)))
  }

  return (minus ? '-' : '') + array.join(SYMBOL) + decimal
}
