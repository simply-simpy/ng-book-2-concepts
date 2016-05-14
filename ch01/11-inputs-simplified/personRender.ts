import {Component} from '@angular/core';


@Component({
    selector: "person",
    template: `This the person: {{ person.name }}`,
    inputs: ['person']
})

export class PersonRender{}