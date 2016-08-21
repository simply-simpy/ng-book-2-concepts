import {Component} from '@angular/core';

@Component({
    selector: 'child',
    template: `<p>My name is {{ passedValue }}</p>`,
    inputs: ['passedValue']
})
class TheInput {
   passedValue:string;
}

@Component({
    selector: 'my-app',
    template: `
        <child [passedValue]=theValue></child>
        <form action="">
        
</form>
    `,
    directives: [TheInput]
})

export class AppComponent {
   theValue: string = 'Scott';
}