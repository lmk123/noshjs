export default function (test) {
  return typeof test === 'number' && !isNaN(test)
}
