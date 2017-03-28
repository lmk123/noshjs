const copy = require('../libs/copy')

describe('copy 函数', function () {
  it('能正确执行', function () {
    expect(copy()).toBeUndefined()
    expect(copy(null)).toBeNull()
    expect(copy({
      test: 'y'
    })).toEqual({
      test: 'y'
    })
  })
})
