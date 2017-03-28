module.exports = function (array, prop, value) {
  return array.filter(function (item) {
    return item[prop] === value
  })
}
