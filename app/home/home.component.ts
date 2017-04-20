import { Component } from '@angular/core';

// import fade in animation
import { fadeInAnimation } from '../_animations/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',

    // make fade in animation available to this component
    animations: [fadeInAnimation],

    // attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})

export class HomeComponent {
}