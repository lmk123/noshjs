export default function (array, prop, value) {
  return array.filter(item => item[prop] === value)
}
