import {Component} from '@angular/core';

@Component({
    selector: 'app',
    styles: [`.blue {color: blue} .round{border-radius: 50%} .base{background: #eee; padding: 50px}`],
    template: `<div class="base" [ngClass]="classList">
                    This is {{ classList.indexOf('blue') > -1 ? "" : "NOT" }} blue  and
                    This is {{ classList.indexOf('round') > -1 ? "" : "NOT" }} round
                </div>`
})

export class AppComponent {
    classList:String[];
    constructor(){
        this.classList = ['blue', 'round']
    }
}
