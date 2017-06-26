const { extendJSON } = require('../dist/nosh.common')

describe('extendJSON 函数', function () {
  it('能正确执行', function () {
    expect(extendJSON(null, { a: '' })).toBeNull()
    expect(extendJSON(undefined, { a: '' })).toBeUndefined()

    expect(extendJSON({}, null, { a: '' })).toEqual({ a: '' })

    const x = Object.create({ inherit: 'x' })

    expect(extendJSON({}, x)).toEqual({})

    expect(extendJSON([], [1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(extendJSON({}, [1, 2, 3, 4])).toEqual({ 0: 1, 1: 2, 2: 3, 3: 4 })

    expect(extendJSON(
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

    expect(extendJSON(
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
