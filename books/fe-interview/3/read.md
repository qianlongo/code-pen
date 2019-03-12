## 闭包

> 如下代码如何实现一次打印出012345

``` javascript

for (var i = 0; i <= 5; i++) {
  setTimeout(function timer () {
    console.log(i)
  }, i * 1000)
}

```

1. 方案一利用闭包

``` javascript

for (var i = 0; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer () {
      console.log(j)
    }, j * 1000)
  })(i)
}

```
2. 利用setTimeout的第三个参数

``` javascript

for (var i = 0; i <= 5; i++) {
  setTimeout(function timer (n) {
    console.log(n)
  }, i * 1000, i)
}

```

3. 利用let
``` javascript

for (let i = 0; i <= 5; i++) {
  setTimeout(function timer () {
    console.log(i)
  }, i * 1000)
}

```


