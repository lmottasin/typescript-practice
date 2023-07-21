"use strict";
// tuples
let a = [3, 'hello', { p: 3 }];
a[0] = '3';
// I can assign number, string, object because ts implicitly imagine my a array type but not in order
// so to give order use tupes
let b = ['world', 4, { t: 3 }];
b[0] = 3; // gives error
console.log(b[0]);
