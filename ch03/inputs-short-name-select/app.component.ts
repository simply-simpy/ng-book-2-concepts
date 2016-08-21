import {Component} from '@angular/core';

class Member {
    constructor(
        public name: string,
        public phone: string
    ){}
}

@Component({
    selector: 'the-member',
    template: `<p>The member's name is {{ member.name}} and their phone number is {{ member.phone }}</p>`,
    inputs: ['member: m']
})
class TheMember {
    member: Member
}

@Component({
    selector: 'my-app',
    directives: [TheMember],
    template: `
        <div *ngFor="let member of members">
            <the-member (click)="productWasSelected($event)" [m]="member"></the-member>
        </div>
        `
})
export class AppComponent {
    members: Member[];
    constructor(){
        this.members = [
            new Member('Scott', '555-555-5555'),
            new Member('Buster', '555-123-4567'),
        ]
    }
    productWasSelected(member: Member): void {
        console.log('Member clicked: ', member)
    }
}
