import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="for-objects">
            <h1>Loop through object</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tr *ngFor="let p of people">
                    <td>{{ p.name }}</td>
                    <td>{{ p.age }}</td>
                    <td>{{ p.city }}</td>
                </tr>
            </table>
            
        </div>
    `
})

export class AppComponent{
    people:any[];
    constructor(){
        this.people = [
            {name: 'Anderson', age: 35, city: 'Sao Paulo'},
            {name: 'John', age: 12, city: 'Miami'},
            {name: 'Peter', age: 22, city: 'New Work'}
        ];
    }
}