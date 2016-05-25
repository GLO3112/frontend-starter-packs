import {Component} from '@angular/core';
import {HelloWorldComponent} from './HelloWorldComponent';

@Component({
    selector: 'my-app',
    template : `<hello-world [firstName]="'GLO-3112'" [lastName]="'WEB'"></hello-world>`,
    directives : [HelloWorldComponent]
})

export class AppComponent {
}