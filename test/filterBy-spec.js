const { filterBy } = require('../dist/nosh.common')
const array = [
  {
    name: 'John',
    age: 33
  },
  {
    name: 'Pdd',
    age: 35
  }
]
describe('filterBy 函数', function () {
  it('能正常运行', function () {
    expect(filterBy(array, 'name', 'John')).toEqual([{
      name: 'John',
      age: 33
    }])
    expect(filterBy(array, 'age', 35)).toEqual([{
      name: 'Pdd',
      age: 35
    }])
  })
})
