import { isPlayerInterface } from "../Interfaces/IsPlayerInterface";

export class Player implements isPlayerInterface {
    public name: string;
    private age: number;
    readonly country: string;

    constructor(name: string, age: number, country: string){
        this.name = name;
        this.age = age
        this.country = country
    }

    play(){
        console.log(`${this.name}, age ${this.age} is 
        playing for country ${this.country}`)
    }

    getAge(): number {
        return this.age
    }
}