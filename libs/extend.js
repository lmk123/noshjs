/**
 * @file copy 和 extend 方法相互引用，所以放在一个文件里。
 */

const hasOwn = Object.prototype.hasOwnProperty

/**
 * 深复制 JSON 对象的函数——除了对象和数组，其它类型的值都只会简单的赋值。
 * @param dest
 * @param objects
 * @return {*}
 */
export function extend (dest, ...objects) {
  if (dest == null) return dest

  objects.forEach(obj => {
    if (obj == null) return
    mixin(dest, obj)
  })

  return dest
}

/**
 * 复制一个值的方法。除了对象和和数组会使用新的以外，其它类型的值都是直接返回。
 * @param val
 * @return {*}
 */
export function copy (val) {
  if (Array.isArray(val)) {
    const newArray = []
    val.forEach((item, index) => {
      newArray[index] = copy(item)
    })
    return newArray
  } else if (typeof val === 'object' && val) {
    return mixin({}, val)
  } else {
    return val
  }
}

function mixin (to, from) {
  for (let key in from) {
    if (!hasOwn.call(from, key)) continue
    to[key] = copy(from[key])
  }
  return to
}
