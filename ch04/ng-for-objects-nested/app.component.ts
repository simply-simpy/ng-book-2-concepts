import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="nested-objects" *ngFor="let item of peopleByCity">
            <h1>{{ item.city }}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tr *ngFor="let p of item.people">
                    <td>{{ p.name }}</td>
                    <td>{{ p.age }}</td>
                </tr>
            </table>
        </div>
    `
})

export class AppComponent{
    peopleByCity:any[];

    constructor(){
        this.peopleByCity = [

            {
                city: 'Miami',
                people: [
                    { name: 'John', age: 12 },
                    { name: 'Angel', age: 22 }
                ]
            },

            {
                city: 'Sao Paulo',
                people: [
                    { name: 'Anderson', age: 35 },
                    { name: 'Philippe', age: 46}
                ]
            }
        ];
    }

}