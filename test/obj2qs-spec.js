const { obj2qs } = require('../dist/nosh.common')

describe('obj2qs 函数', function () {
  it('参数拼接', function () {
    expect(obj2qs({ a: 'a', b: 'b' })).toBe('a=a&b=b')
  })
  it('参数拼接加 ? 前缀', function () {
    expect(obj2qs({ apple: 'jack', rainbow: 'dash' }, '?')).toBe('?apple=jack&rainbow=dash')
  })
  it('参数拼接加 & 前缀', function () {
    expect(obj2qs({ twilight: 'Sparkle', pinkie: 'pie' }, '&')).toBe('&twilight=sparkle&pinkie=pie')
  })
})
