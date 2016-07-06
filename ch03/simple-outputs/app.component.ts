import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'app',
    template: `
            <p>The child value is: {{ childValue }}</p>
            <child (childChanged)="childValue = $event"></child>
        `,
    directives: [ChildComponent]
})

export class AppComponent {
    childValue: string;
}

