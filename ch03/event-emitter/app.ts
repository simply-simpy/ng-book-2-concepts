import {Component, EventEmitter} from '@angular/core';


@Component({
    selector: 'single-component',
    outputs: ['putRingOnIt'],
    template: `
        <button (click)="liked()">Like It</button>
    
    `
})

export class SingleComponent {
    putRingOnIt: EventEmitter<string>;

    constructor(){
        this.putRingOnIt = new EventEmitter();
    }

    liked(): void {
        this.putRingOnIt.emit("oh oh oh");
    }
}

@Component({
    selector: 'inventory-app',
    template: `
        <div>
            <single-component>
                (putRingOnIt)="ringWasPlaced($event)"
            </single-component>
        </div>
    `
})
    class ClubComponent {
        ringWasPlaced(message: string){
            console.log(`Put your hands up: ${message}`)
        }
    }
