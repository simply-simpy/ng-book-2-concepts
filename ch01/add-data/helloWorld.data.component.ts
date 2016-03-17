import {Component} from 'angular2/core'

@Component({
    selector: 'my-app',
    template: '<h1>Hello {{ name }}</h1>'
})

export class HelloWorldDataComponent {
    name: string;

    constructor(){
        this.name = "Scott";
    }

}
