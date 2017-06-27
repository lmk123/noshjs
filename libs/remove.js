/**
 * 从数组中删除一个项
 * @param {Array} arr
 * @param item
 */
export default function (arr, item) {
  const index = arr.indexOf(item)
  if (index >= 0) {
    arr.splice(index, 1)
  }
}
