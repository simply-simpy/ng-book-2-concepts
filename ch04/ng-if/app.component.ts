import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div *ngIf="false">
            This is never displayed.
        </div>
        <div *ngIf="true">
            This is always displayed.
        </div>
        <div *ngIf="a > b">
            Displayed if a is greater than b.
        </div>
        <div *ngIf="str == 'yes'">
            displayed if string holds yes.
        </div>
        <div *ngIf="myFunc()">
            displayed if my func returns a true value.
        </div>
    `
})

export class AppComponent{
    str:string = 'yes';

    a:number = 1;
    b:number = 0;

    myFunc(){
        return true;
    }
}