import {Component} from 'angular2/core'

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{ name }}.
    Your birthday is {{ DOB}}, and your address is {{ address }}
    </h1>`
})

export class DataModel {
    name: string;
    DOB: string;
    address: string

    constructor(){
        this.name = "Scott";
        this.DOB = 'April 5';
        this.address = '411 NW Flanders';
    }

}
