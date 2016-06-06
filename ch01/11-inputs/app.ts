import {Component} from '@angular/core';
import {InputComponent} from './input.component';

class Dog {
    age: number;
    name: string;
    constructor(age: number, name:string ){
        this.age = age;
        this.name = name;
    }
}

@Component({
    selector: 'my-app',
    directives: [InputComponent],
    template: `<the-input *ngFor = "let doggy of dogs" [dog] = "doggy"></the-input>`
})

export class MyApp{
    dogs: Dog[];
    constructor(){
        this.dogs = [
            new Dog(10, "Maggie"),
            new Dog(8, "Buster")
        ]
    }
}




