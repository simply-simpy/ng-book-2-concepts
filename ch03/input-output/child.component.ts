import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'child',
    template: `
        <div class="child">
            <h2>Child</h2>
            <p>Value entered in parent component: {{ parentValue }}</p>
            <input type="text" #childInput (keyup)="onChange(childInput.value)" placeholder="type here">
        </div>
     `,
    inputs: ['parentValue: passedValue'],
    outputs: ['childChanged'],
    styles: ['.child { background-color: orange; padding: 10px; margin-top: 10px }']
})

export class ChildComponent {
    parentValue: string;
    childChanged = new EventEmitter<string>();

    onChange(value: string){
        this.childChanged.emit(value);
    }
}