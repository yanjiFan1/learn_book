// for (var i = 1; i <=5; i++) {
//     console.log(i)
//     setTimeout(function timer() {
//         console.log(i);
//     }, i * 1000)
// }


// for (var i = 1; i <=5; i++) {
//     (function() {
//         setTimeout(function timer() {
//             console.log(i);
//         }, i * 1000)
//     })();
// }

// for (var i = 1; i <=5; i++) {
//     (function(j) {
//         setTimeout(function timer() {
//             console.log(j);
//         }, j * 1000)
//     })(i);
// }

// const arr = ['tom', 'jack', 'June', 'july']

// for (var i = 0; i < arr.length; i++) {
//     (function(j) {
//         console.log(j)
//         setTimeout(function timer() {
//             console.log(arr[j]);
//         }, j * 1000)
//     })(i);
// }


for (let i = 1; i <=5; i++) {
    console.log(i)
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000)
}