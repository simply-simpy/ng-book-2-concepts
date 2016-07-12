import {Component} from '@angular/core';

@Component({
    selector: 'app',
    styles: [`.bordered{border: 1px solid black}`],
    template: `
    <div [ngClass]="classesObj" (click)="toggleBorder()">
        Using object var. Border {{ classesObj.bordered ? "ON" : "OFF" }}
    </div>
    `
})

export class AppComponent {
    isBordered: boolean;
    classesObj: any;
    bordered: string;
    toggleBorder(){
        this.isBordered = !this.isBordered;
        this.classesObj = {
            bordered: this.isBordered
        }
    }


}

// todo: fix this, currently not working