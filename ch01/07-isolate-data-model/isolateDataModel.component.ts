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
    template: `<h1>Hello {{ person.name }}.
    Your birthday is {{ person.DOB}}, and your age is {{ person.age }} years old. Your address is {{ person.address }}
    </h1>`
})

export class IsolateDataModel {
    person: Person;

    constructor(){
        this.person = new Person("Scott", "May 7", "511 NW Flanders", 21)
    }

}
