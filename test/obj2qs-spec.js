const { obj2qs } = require('../dist/nosh.common')

describe('obj2qs 函数', function () {
  it('能正常运行', function () {
    expect(obj2qs({ a: 'a', b: 'b' })).toBe('a=a&b=b')
  })
})
