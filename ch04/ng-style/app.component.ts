import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div [style.background-color]="'yellow'">
            This is yellow
        </div>
    `
})

export class AppComponent{}