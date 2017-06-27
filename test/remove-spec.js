const { remove } = require('../dist/nosh.common')

describe('remove 函数', function () {
  it('能正常运行', function () {
    const arr = [1, 2, 3]
    remove(arr, 2)
    expect(arr).toEqual([1, 3])

    remove(arr, 100)
    expect(arr).toEqual([1, 3])
  })
})
