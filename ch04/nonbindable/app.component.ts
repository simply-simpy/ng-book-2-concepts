import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="non-bind">
            <p>{{ content }}</p>
            <p ngNonBindable>
                This is what {{ content }} rendered.
            </p>
        </div>
    `
})

export class AppComponent{
    content:string;

    constructor(){
        this.content = "Blah, blah, blah"
    }
}