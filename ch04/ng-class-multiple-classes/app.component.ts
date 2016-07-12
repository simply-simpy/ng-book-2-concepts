import {Component} from '@angular/core';


@Component({
    selector: 'app',
    styles: [`.blue {color: blue} .round{border-radius: 50%} .base{background: #eee; padding: 50px}`],
    template: `
        <div class="base" [ngClass]="['blue', 'round']">
            Blue and round classes.
        </div>
`
})

export class AppComponent{}