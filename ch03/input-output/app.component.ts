import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component ({
    selector: 'app',
    styles: ['.parent { background-color: gray; padding: 20px }'],
    template: `
        <div class="parent">
            <h1>This is the parent</h1>
            <p>Value entered in child component: {{ childValue }}</p>
            <form action="">
                <input type="text" #name (keyup)="0" placeholder="type here">    
            </form>
             <child [passedValue]="name.value" (childChanged)="childValue=$event"></child>
        </div>
    `,
    directives: [ChildComponent]
})
export class App {
    childTextValue: string;
}
