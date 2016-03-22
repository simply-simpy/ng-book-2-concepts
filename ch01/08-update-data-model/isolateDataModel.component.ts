import {Component} from 'angular2/core'
class Person {
    name: string
    DOB: string;
    address: string;
    age: number;

    constructor(theName: string, theDOB: string, theAddress: string, theAge: number){
        this.name = theName;
        this.DOB = theDOB;
        this.address = theAddress;
        this.age = theAge;
    }
}

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{ person.name }}.<br>
        Your birthday is {{ person.DOB}},<br>
        and your age is {{ person.age }} years old.<br>
        Your address is {{ person.address }}
    </h1>
    <p>change age:</p>
    <button (click)="increaseAge()">Increase age</button>
    <button (click)="decreaseAge()">Lower age</button>
    `
})

export class IsolateDataModel {
    person: Person;

    constructor(){
        this.person = new Person("Scott", "May 7", "100 SW Flanders", 21)
    }

    increaseAge(): boolean {
        this.person.age ++;
        return false;
    }

    decreaseAge(): boolean {
        this.person.age --;
        return false;
    }

}
