import {Component} from '@angular/core'

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{ name }}.
    Your birthday is {{ DOB }}, and your address is {{ address }}
    </h1>`
})

export class DataModelComponent {
    name: string;
    DOB: string;
    address: string

    constructor(){
        this.name = "Scott";
        this.DOB = 'April 23';
        this.address = '100 SW Flanders';
    }

}
