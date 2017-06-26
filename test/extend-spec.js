const { extend } = require('../dist/nosh.common')

describe('extend 函数', function () {
  it('能正确执行', function () {
    expect(extend(null, { a: '' })).toBeNull()
    expect(extend(undefined, { a: '' })).toBeUndefined()

    expect(extend({}, null, { a: '' })).toEqual({ a: '' })

    const x = Object.create({ inherit: 'x' })

    expect(extend({}, x)).toEqual({})

    expect(extend([], [1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(extend({}, [1, 2, 3, 4])).toEqual({ 0: 1, 1: 2, 2: 3, 3: 4 })

    expect(extend(
      {
        a: [
          {
            b: 1
          }
        ]
      },
      {
        a: [
          {
            c: 2
          }
        ]
      }
    )).toEqual({
      a: [
        {
          c: 2
        }
      ]
    })

    expect(extend(
      {
        a: {
          b: 1
        }
      },
      {
        a: {
          b: 2,
          c: 3
        },
        b: [
          { a: 1 }
        ]
      },
      {
        b: [
          { b: 2 },
          { c: 3 }
        ]
      }
    )).toEqual(
      {
        a: {
          b: 2,
          c: 3
        },
        b: [
          { b: 2 },
          { c: 3 }
        ]
      }
    )
  })
})
