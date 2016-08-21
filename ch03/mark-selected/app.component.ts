import {Component, EventEmitter} from '@angular/core';

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
    outputs: ['onMemberSelected'],
    styles: ['.selected {outline: 1px solid orange; display:block} '],
    template: `
        <div *ngFor="let member of members">
            <the-member 
                (click)="clicked(member)" 
                [m]="member"
                [class.selected]="isSelected(member)">
             </the-member>
        </div>
        `
})
export class AppComponent {
    memberList: Member[];
    onMemberSelected: EventEmitter<Member>;
    currentMember: Member;
    formerMember: Member;

    members: Member[];
    constructor(){
        this.members = [
            new Member('Scott', '555-555-5555'),
            new Member('Buster', '555-123-4567'),
        ];
        this.onMemberSelected = new EventEmitter();
    }
   clicked(member: Member): void {
       this.currentMember = member;
       this.formerMember = member;
       this.onMemberSelected.emit(member);
       console.log('clicked on: ' + member.name)
       console.log('current member: ' + this.currentMember.name)
       console.log('former member: ' + this.formerMember.name)

   }
    isSelected(member: Member): boolean {
        if (!member || !this.currentMember){
            return false;
        }
        return member.name === this.currentMember.name;
    }


}
