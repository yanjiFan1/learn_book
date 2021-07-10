function foo(str, a) {
    eval(str);
    console.log(a + b); // 3
    return a + b;
}

var b = 3;
foo('var b = 2', 1);


// eval使用了欺骗词法， 更改了b的作用域环境