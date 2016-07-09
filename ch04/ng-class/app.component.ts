import {Component} from '@angular/core';

@Component({
    styles: ['.bordered{border: 1px dashed black; background: #eee;}'],
    selector: 'app',
    template: `
    <div class="ng-class">
        <h1>Static Borders</h1>
        <div [ngClass]="{bordered: false}">This is never bordered</div>
        <div [ngClass]="{bordered: true}">This has borders</div>
    </div>
    `
})

export class AppComponent{}