import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="app">
            <h1>Get index</h1>
            <ul>
                <li *ngFor="let city of cities; let i = index">
                    {{ i + 1 }} — {{ city  }}
                </li>
            </ul>
        </div>
    `
})

export class AppComponent {
    cities:string[];

    constructor(){
        this.cities = [
            "Bend",
            "Portland",
            "Coos Bay"
        ]
    }
}