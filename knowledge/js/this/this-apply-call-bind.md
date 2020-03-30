

+ call 、apply、bind

在上面讲解this的时候，提到了 call 和 apply，以及bind。
JavaScript 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念它们最主要的作用，
换句话说，就是为了改变函数体内部 this 的指向。

现总结如下：
```
var obj: = {
    name:'Elon Musk',
    doSomething: (arg){
        consoel.log(arg);
    }
}
```

apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

```


```
call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
```
```

bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列.
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
```


```

1. 共同和区别：

    1. call 、apply、bind三者都可以改变函数的this对象指向
    2. call 、apply、bind三者第一个参数都是this要指向的对象，如果如果没有这个参数，默认指向全局window
    3. call 、apply、bind三者都可以传参，但是apply是数组，而call是有顺序的传入，bind和call传参数一样
    4. bind方法是创建一个函数，然后可以在需要调用的时候再执行函数，并非是立即执行函数；而call，apply是在改变了上下文中的this指向后并立即执行函数。

2. 应用场景



