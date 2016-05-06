import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
       <p *ngFor="let name of names"> hello {{ name }} </p>
    `
})

export class HelloWorldDataListComponent {
    names: string[];

    constructor(){
        this.names = ["Bob", "Gene", "Roger", "Elvin"];
    }

}
