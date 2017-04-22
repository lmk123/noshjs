export default function (obj) {
  if (obj == null) return obj
  return JSON.parse(JSON.stringify(obj))
}
