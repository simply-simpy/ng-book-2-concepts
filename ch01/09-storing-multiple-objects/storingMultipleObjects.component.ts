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
    template: `
    <p
      *ngFor="#person of persons">Hello {{ person.name }} your birthday is {{ person.DOB }}.
      Your address is {{ person.address }}, and you are {{ person.age }} years old.
    </p>
    `
})

export class StoringMultipleObjects {
    persons: Person[];

    constructor(){
        this.persons = [
            new Person("Scott", "May 7", "511 NW Flanders", 29),
            new Person("Robert", "January 7", "110 Smith", 25),
            new Person("Shane", "October 7", "4532 North Ave", 28),
            new Person("Danny", "August 21", "989 West Elm", 19)
        ]
    }


}
