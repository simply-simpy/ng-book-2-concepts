import {Component} from '@angular/core';
import {InputComponent} from './input.component';

class Dog {
    age: string;
    name: string;
    constructor(age: string, name:string ){
        this.age = age;
        this.name = name;
    }
}

@Component({
    selector: 'my-app',
    directives: [InputComponent],
    template: `<the-input
                         *ngFor = "let dog of dogs"
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

export class AppComponent{
    dogs: Dog[];
    constructor(){
        this.dogs = [
            new Dog("10", "Maggie"),
            new Dog("8", "Buster")
        ]
    }

    addDog(age: HTMLInputElement, name: HTMLInputElement): boolean {
        console.log(`Adding dog age: ${age.value} and named: ${name.value}`);
        this.dogs.push(new Dog(age.value, name.value));
        age.value = '';
        name.value = '';
        return false;
    }
}



