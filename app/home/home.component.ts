import { Component } from '@angular/core';
import { fadeIn } from '../_helpers/animations';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    animations: [fadeIn()],
    host: { '[@fadeIn]': '' }
})

export class HomeComponent {
}