import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="container" [ngSwitch]="myVar">
            <div *ngSwitchWhen=" 'A' ">Var is A</div>
            <div *ngSwitchWhen=" 'B' ">Var is B</div>
            <div *ngSwitchDefault>Var is something else</div>
        </div>
    `
})

export class AppComponent{
    myVar: string = 'X';
}