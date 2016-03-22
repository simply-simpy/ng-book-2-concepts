import {Component} from 'angular2/core';
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
    template: `<the-input
                         *ngFor = "#dog of sortedDogs()"
                         [dog] = "dog"> 
              </the-input>
              
              <form>
                  <legend>Add Dog</legend>
                      <label>Age
                        <input type="text" #age>
                      </label>
                      <label>Name
                        <input type="text" #name>
                      </label>
                      <button (click)="addDog(age, name)" type="submit">Add Dog</button>
              </form>
            `
})

export class MyApp{
    dogs: Dog[];
    constructor(){
        this.dogs = [
            new Dog(8, "Buster"),
            new Dog(10, "Maggie"),
            new Dog(5, "Gertrude")
        ]
    }

    addDog(age: any, name: HTMLInputElement): void {
        console.log(`Adding dog age: ${age.value} and named: ${name.value}`);
        this.dogs.push(new Dog(age.value, name.value));
        age.value = '';
        name.value = '';
    }

    sortedDogs():Dog[] {
        return this.dogs.sort((a: Dog, b: Dog) =>  a.age - b.age );
    }


}



