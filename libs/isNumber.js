module.exports = function (test) {
  return typeof test === 'number' && !isNaN(test)
}
