import {Component} from '@angular/core';

@Component({
    selector: 'child',
    template: `
        <div class="child">
            <h2>Child</h2>
            <p>Value entered in parent component: {{ parentValue }}</p>
        </div>
     `,
    inputs: ['parentValue'],
    styles: ['.child { background-color: orange; padding: 10px; }']
})

export class ChildComponent {
    parentValue: string;
}