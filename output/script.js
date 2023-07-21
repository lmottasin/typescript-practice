/* const multiply = (a : number, b : number) => {
    return a * b;
}

console.log(multiply(30,20)); */
// array
/* let array = [ 'Shakib', 34 , true]

array.push({
    cricketBoard: 'bangaldesh'
}) */
// object 
/*  let cricketPlayerInfo = {
    name: 'mashrafi',
    age: 34,
    isCaptain: true
 }

cricketPlayerInfo.country = 'Bangladesh'
cricketPlayerInfo.age = '34' */
/* type stringOrNum = string | number
type userType = { name: string, age: number }

const userData = (
    id: stringOrNum,
    user: userType
) => {
    console.log(`User id is ${id}, user name is ${user.name}
    age is ${user.age}`);
}

console.log(userData(10,{
    name: 'lemon',
    age: 10
})); */
// class type
import { Player } from "./Classes/Player.js";
const mashrafi = new Player('Mash', 40, 'Bangladesh');
const sakib = new Player('Moina', 35, 'Bangladesh');
const players = [];
players.push(sakib);
console.log(players);
// access modifier
