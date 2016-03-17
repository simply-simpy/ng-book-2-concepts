import {Component} from 'angular2/core'

@Component({
    selector: 'my-app',
    template: `
        <form>
            <input type="text" name="name" #theName>
            <button (click)="alertName(theName)" type="submit">Submit</button>
        </form>
    `
})

export class BindActionComponent {
    constructor(){}

    alertName(name:HTMLInputElement){
        alert(`Hello ${name.value}`);
    }
}
