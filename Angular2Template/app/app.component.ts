import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
//    template: `
//<div>
//    <label>Search <span *ngIf="query"> for {{query}}</span></label><br>
//    <input [(ngModel)]="query" placeholder="Type your Search Term">
//    <label for="name">HI {{name}}!!</label>
//    <input [(ngModel)]="name" type="text" />
//    {{name}}
//</div>
//`
    templateUrl: 'views/app.component.html'
})
export class AppComponent {
    name = "Rajagopal";
}
