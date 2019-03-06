# nosh.js [![Build Status](https://img.shields.io/travis/lmk123/noshjs/master.svg?style=flat-square)](https://travis-ci.org/lmk123/noshjs) [![Coverage Status](https://img.shields.io/coveralls/lmk123/noshjs/master.svg?style=flat-square)](https://coveralls.io/github/lmk123/noshjs?branch=master) [![dependencies Status](https://img.shields.io/david/lmk123/noshjs.svg?style=flat-square)](https://david-dm.org/lmk123/noshjs) [![NPM Version](https://img.shields.io/npm/v/noshjs.svg?style=flat-square)](https://www.npmjs.com/package/noshjs)

一个我自己常用的工具函数库。

## 安装

可以用 NPM 或者 Yarn 安装：

```bash
npm i noshjs
```

或者直接将 [nosh.js](https://unpkg.com/noshjs) 下载到你的项目中，通过 script 标签引用，此时会注册一个全局变量 `window.nosh`。

## API

### nosh.copy(value)

类似于 [lodash.cloneDeep](https://lodash.com/docs/4.7.11#cloneDeep)，但没有对特殊类型（例如 Set、Map、Buffer 等）做处理，所以性能比 lodash.cloneDeep 高，见 https://github.com/lodash/lodash/issues/1984

### nosh.extend(object, [sources])

类似于 [lodash.merge](https://lodash.com/docs/4.7.11#merge)，但没有对特殊类型做处理。

### nosh.get(object, path, [defaultValue])

类似于 [lodash.get](https://lodash.com/docs/4.7.11#get)，但是在读取到 `null` 时也会返回 `defaultValue`。例如：

```js
lodash.get({ a: null }, 'a', 'default value') // null
nosh.get({ a: null }, 'a', 'default value') //  'default value'
```

这个方法性能比 lodash.get 低，如果介意的话，可以基于 lodash.get 封装：

```js
function noshGet(object, path, defaultValue) {
  let result = lodash.get(object, path, defaultValue)
  if (result === null) result = defaultValue
  return result
}
```

### nosh.isNumber(value)

判断 `value` 是否满足 `typeof value === 'number' && !isNaN(value)`。

### nosh.kmbt(value, [fixed = 2])

将一个数字转换成 KMBT 表现形式的字符串。如果 `value` 不能转换成数字，则返回 `null`。第二个参数可以设置保留多少位小数，默认保留两位。

```js
nosh.kmbt('not a number') // null
nosh.kmbt(988) // '988'
nosh.kmbt(9888) // '9.89K'
nosh.kmbt(9888777) // '9.89M'
nosh.kmbt(98887776666) // '98.89B'
nosh.kmbt(9888777666555) // '9.89T'
nosh.kmbt(9888777666555444) // '9.89P'
nosh.kmbt(9888777666555444333) // '9.89E')
```

### nosh.obj2qs(object, [prefix])

将一个对象转换成查询字符串。第二个参数用于指定查询字符串的前缀。

```js
nosh.obj2qs({ a: 1, b: 2 }, '?') // '?a=1&b=2'
```

### nosh.percentage(value, [fixed = 2])

将一个数字转换成百分比表现形式的字符串。如果 `value` 不能转换成数字，则返回 `null`。第二个参数可以设置保留多少位小数，默认保留两位。

```js
nosh.percentage('not a number') // null
nosh.percentage('1') // '100%'
nosh.percentage(-0.1) // '-10%'
```

### nosh.remove(array, item)

从数组中删除指定的元素，这个方法只删除第一个匹配的元素。

```js
nosh.remove([1, 2, 3, 1], 1) // [2, 3, 1]
```

### nosh.thousands(value)

将一个数字转换成百分比表现形式的字符串。如果 `value` 不能转换成数字，则返回 `null`。

```js
nosh.thousands('not a number') // null
nosh.thousands(1000) // '1,000'
```

## 许可

MIT
