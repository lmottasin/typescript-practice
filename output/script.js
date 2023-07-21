"use strict";
// generic 
/* const addId = (obj: object) => {
    let id = Math.random() * 100;
    return { ...obj, id};
};

let user = addId({
    name: 'mashrafi',
    age: 40,
    country: 'Bangladesh'
}) */
// user.name
// problem: cannot recognize name so add generic
/* const addId = <T> (obj: T) => {
    let id = Math.random() * 100;
    return { ...obj, id};
};

let user = addId({
    name: 'mashrafi',
    age: 40,
    country: 'Bangladesh'
})

user.name */
// this time name is accessable
/* const addId = <T> (obj: T) => {
    let id = Math.random() * 100;
    return { ...obj, id};
};

let user = 'mashrafi'

user.id */
// problem is we want that user sends object and some required field with extra fields that are optional
const addId = (obj) => {
    let id = Math.random() * 100;
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: 'mashrafi',
    age: 40,
    country: 'Bangladesh'
});
console.log(user.country);
// all accessable required and not requied fileds
