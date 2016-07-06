import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'child',
    template: `
        <h2>Child</h2>
        <input type="text" #childInput (keyup)="onChange(childInput.value)">
    `,
    outputs: ['childChanged']
})

export class ChildComponent {
    childChanged = new EventEmitter<string>();

    onChange(value: string){
        this.childChanged.emit(value)
    }
}
