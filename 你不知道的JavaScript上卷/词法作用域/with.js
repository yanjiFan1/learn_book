function foo(obj) {
    with(obj) {
        a = 2
    }
}

var o1 = {
    a: 3
}


foo(o1)
console.log(o1.a)