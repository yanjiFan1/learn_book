函数是JavaScript中最常见的作用域单元。本质上，声明一个函数内部的变量或函数会在所处的作用域中隐藏起来，这是有意为之的良好软件的设计原则。

但函数不是唯一的作用域单元。块作用域指的是变量和函数不仅可以属于所处的作用域，也可以属于某个代码块（通常指{...}）内部.

从ES3开始，try/catch结构在cathc分句中具有块级作用域

在ES6中引入let关键字（var关键字的表亲），用来在任意代码块中声明变量。if(...) { let = 2 } 会声明一个劫持了if的{ ... }块的变量， 并且将变量添加到这个块中。

有些人认为块作用域不应该完全作为函数作用域的替代方案。两种功能应该同时存在，开发者可以并且也应该根据需要选择使用何种作用域，创造可读，可维护的优良代码.