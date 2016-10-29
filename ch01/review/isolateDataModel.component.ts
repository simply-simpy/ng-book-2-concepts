import {Component} from '@angular/core';

class Person{
    name: string;
    DOB: string;
    age: number;
    address: string;
    constructor(theName: string, theDOB: string, theAge: number, theAddress:string){
        this.name = theName;
        this.DOB = theDOB;
        this.age = theAge;
        this.address = theAddress;
    }
}

@Component({
    selector: 'my-app',
    template: `
        <h2>Hello {{ person.name }}</h2>.<br>
        Your birthday is {{ person.DOB }}, and your age is {{ person.age }} years old. <br>
        Your address is {{ person.address }}
    `
})

export class IsolateDataModelComponent {
    person: Person;
    constructor(){
        this.person = new Person("Scott", "1,2,3", 21, "new berry")
    }
}