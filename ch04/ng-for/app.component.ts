import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="ngFor">
            <h1>Loop through cities</h1>
             <ul>
                <li *ngFor="let city of cities" class="item {{ city }}">
                    {{ city }}
                </li>
             </ul>
        </div>
`
})

export class AppComponent {
    cities:string[];
    constructor(){
        this.cities = ['Miami', 'Sao Paulo', 'New York']
    }
}