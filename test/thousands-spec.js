const { thousands } = require('../dist/nosh.common')

describe('thousands 函数', function () {
  it('能正常运行', function () {
    expect(thousands('not a number')).toBe('')
    expect(thousands(1000)).toBe('1,000')
    expect(thousands(-1000)).toBe('-1,000')
  })
})
