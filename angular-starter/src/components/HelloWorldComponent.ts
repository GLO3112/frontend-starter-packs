import {Component, Input} from '@angular/core';
@Component({
    selector: 'hello-world',
    template: `
        <h1>
            Hello {{firstName}} {{lastName}}
        </h1>
        `
})

export class HelloWorldComponent {
    @Input() firstName: string;
    @Input() lastName: string;


    ngOnInit() {
        console.log(this.firstName, this.lastName);
    }
}
