"use strict";
/* const multiply = (a : number, b : number) => {
    return a * b;
}

console.log(multiply(30,20)); */
function drawRectangle(options) {
    console.log(options.width, options.height);
}
let threeDoptions = {
    width: 10,
    height: 10,
    length: 10
};
// error 
/* drawRectangle({
    width: 10,
    height: 10,
    length: 100
}) */
// not error
drawRectangle(threeDoptions);
