const kmbt = require('../libs/kmbt')

describe('kmbt 函数', function () {
  it('能正常运行', function () {
    expect(kmbt('not a number')).toBe('')
    expect(kmbt(-988)).toBe('-988')
    expect(kmbt(988)).toBe('988')
    expect(kmbt(988.01)).toBe('988.01')
    expect(kmbt(9888)).toBe('9.89K')
    expect(kmbt(9888777)).toBe('9.89M')
    expect(kmbt(98887776666)).toBe('98.89B')
    expect(kmbt(9888777666555)).toBe('9.89T')
    expect(kmbt(9888777666555444)).toBe('9.89P')
    expect(kmbt(9888777666555444333)).toBe('9.89E')
  })
})
