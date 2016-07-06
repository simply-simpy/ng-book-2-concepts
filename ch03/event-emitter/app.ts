import {Component, EventEmitter} from '@angular/core';


@Component({
    selector: 'single-component',
    outputs: ['putRingOnIt'],
    template: `
        <p>Message logs to console:</p>
        <button (click)="liked()">Like It</button>
    `
})

class SingleComponent {

    putRingOnIt = new EventEmitter<string>();

    liked(): void {
        this.putRingOnIt.emit("oh oh oh");
    }
}


@Component({
    selector: 'app',
    directives: [SingleComponent],
    template: `
             <single-component (putRingOnIt)="ringWasPlaced($event)"></single-component> 
             <p></p>
        `
})

export class App {
    ringWasPlaced(message: string){
        console.log(`Put your hands up: ${message}`);
    }
}
