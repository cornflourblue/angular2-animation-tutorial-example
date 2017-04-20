import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService, PubSubService } from '../_services/index';

// import slide in/out animation
import { slideInOutAnimation } from '../_animations/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-add-edit.component.html',

    // make slide in/out animation available to this component
    animations: [slideInOutAnimation],

    // attach the slide in/out animation to the host (root) element of this component
    host: { '[@slideInOutAnimation]': '' }
})

export class ProductAddEditComponent implements OnInit {
    title = 'Add Product';
    product: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private pubSubService: PubSubService) { }

    ngOnInit() {
        let productId = Number(this.route.snapshot.params['id']);
        if (productId) {
            this.title = 'Edit Product';
            this.product = this.productService.getById(productId);
        }
    }

    saveProduct() {
        // save product
        this.productService.save(this.product);

        // redirect to users view
        this.router.navigate(['products']);

        // publish event so list controller can refresh
        this.pubSubService.publish('products-updated');
    }
}