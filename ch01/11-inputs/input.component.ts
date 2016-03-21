import {Component} from "angular2/core";

@Component({
    selector: 'the-input',
    template: `<strong>Dog Name:</strong> {{ dog.name }} and <strong>Dog Age:</strong> {{ dog.age }}. <br>`,
    inputs: ['dog']
})

export class InputComponent{}




