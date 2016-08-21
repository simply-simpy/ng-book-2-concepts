import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="app">
            <h1>Dynamic classes</h1>
            <p 
            (click)="clicked()"
            [class.selected]="selected">
            Click to add dynamic class
            </p>
        </div>
    `,
    styles: ['.selected {outline: 1px solid orange } p {cursor: pointer}  ']
})

export class AppComponent{
        selected: boolean = false;
        clicked(){
            if (this.selected == false){
                this.selected = true;
            }
            else {
                this.selected = false;
            }
        }
}

// todo: make this a ternary