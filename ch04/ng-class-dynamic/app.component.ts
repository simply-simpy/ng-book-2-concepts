import {Component} from '@angular/core';

@Component({
    selector: 'app',
    styles: ['.bordered{border: 1px solid black; background: #eee;}'],
    template: `
        <div class="ng-class-dynamic">
            <h1>Dynamic classes</h1>
            <p [ngClass]="{bordered: isBordered}">
                Using object literal. Border {{ isBordered ? "ON" : "OFF"  }}
            </p>
            <button (click)="switchBorder()">Switch Border</button>
        </div>
        `
})

export class AppComponent{
    isBordered: boolean = false;
    switchBorder(){
        this.isBordered = !this.isBordered;
    }
}