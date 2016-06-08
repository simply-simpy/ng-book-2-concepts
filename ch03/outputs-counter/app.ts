import {Component} from '@angular/core';

@Component({
    selector: 'inventory-app',
    template: `
        {{ value }}
        <button (click)="increase()">Increase</button>
        <button (click)="decrease()">Decrease</button>
    `
})
// Output event we are listening for is click event
export class Counter {
    value: number;

    constructor(){
        this.value = 1;
    }

    increase(){
        this.value = this.value + 1;
    }

    decrease(){
        this.value = this.value - 1;
    }
}

