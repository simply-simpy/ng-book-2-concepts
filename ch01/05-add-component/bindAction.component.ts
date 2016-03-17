import {Component} from 'angular2/core'
import {ParagraphComponent} from './paragraph.component';

@Component({
    selector: 'my-app',
    directives: [ParagraphComponent],
    template: `
        <form>
            <input type="text" name="name" #theName>
            <button (click)="alertName(theName)" type="submit">Submit</button>
        </form>
        <paragraph></paragraph>
    `
})

export class BindActionComponent {
    constructor(){}

    alertName(name:HTMLInputElement){
        alert(`Hello ${name.value}`);
    }
}
