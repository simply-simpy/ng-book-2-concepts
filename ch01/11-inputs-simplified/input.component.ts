import {Component} from '@angular/core';
import {PersonRender} from './personRender';

class Person {
    name: string;
    age: number;
    constructor(theName: string, theAge: number){
        this.name = theName;
        this.age = theAge;
    }
}
@Component({
    directives: [PersonRender],
    selector: "my-app",
    template: `<p *ngFor="let person of persons"><person [person]="person"></person></p>`
})

export class InputComponent {
    persons: Person[];
    constructor(){
        this.persons = [
            new Person("Scott", 32),
            new Person("Jane", 10)
        ]
    }
}