const { get } = require('../dist/nosh.common')

describe('get 函数', () => {
  it('', () => {
    expect(get(null, ['a'])).toBeUndefined()
    expect(get([], ['a', 'b', 'c'])).toBeUndefined()
    expect(get({ a: { b: 1 } }, ['a', 'b'])).toBe(1)
    expect(get({ a: null }, ['a'], 'x')).toBe('x')
  })
})
