import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component ({
    selector: 'my-app',
    styles: ['.parent { background-color: gray; padding: 20px }'],
    template: `
        <div class="parent">
            <h1>This is the parent</h1>
            <form action="">
                <input type="text" #name (keyup)="0" placeholder="type here">    
            </form>
             <child [parentValue]="name.value"></child>
        </div>
    `,
    directives: [ChildComponent]
})
export class AppComponent {}
