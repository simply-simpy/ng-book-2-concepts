import {Component} from 'angular2/core'

@Component({
    selector: 'my-app',
    template: `
       <p *ngFor="#name of names"> hello {{ name }} </p>
    `
})

export class HelloWorldDataListComponent {
    names: string[];

    constructor(){
        this.names = ["Bob", "Gene", "Roger", "Elvin"];
    }

}
