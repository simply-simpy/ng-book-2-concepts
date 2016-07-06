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
    selector: 'app',
    directives: [TheMember],
    template: `
        <div>
            <the-member [m]="member"></the-member>
        </div>
        `
})
export class App {
    member: Member;
    constructor(){
        this.member = new Member('Scott', '555-555-5555')
    }
}

//InventoryApp

// create constructor for members which has name and phone number, component will display this info