import { Component } from '@angular/core';
import { slideInOut } from '../_helpers/animations';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-add-edit.component.html',
    animations: [slideInOut()],
    host: { '[@slideInOut]': '' }
})

export class ProductAddEditComponent {
    title: string = "Add Product";
}