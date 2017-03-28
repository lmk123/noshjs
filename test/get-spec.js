const get = require('../libs/get')

const obj = {
  a: 'b',
  c: {
    d: [1]
  },
  e: [
    {
      f: 2
    }
  ],
  'g-h': [
    {
      'x-y': 3
    }
  ],
  'r.u': 4
}

describe('get 函数', function () {
  it('能正常执行', function () {
    expect(get(obj, 'a')).toBe('b')
    expect(get(obj, 'c.d[0]')).toBe(1)
    expect(get(obj, 'e[0].f')).toBe(2)
    expect(get(obj, '["g-h"][0]["x-y"]')).toBe(3)
    expect(get(obj, '["r.u"]')).toBe(4)
    expect(get(obj, 'a.b.c.e.f')).toBeUndefined()
    expect(get(obj, 'a.b.c.e.f', 'default')).toBe('default')
  })
})
