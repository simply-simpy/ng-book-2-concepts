import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
            Styles set via key value pairs.
        </div>
    `
})

export class AppComponent {}