import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../_helpers/animations';
import { ProductService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-list.component.html',
    animations: [fadeIn()],
    host: { '[@fadeIn]': '' }
})

export class ProductListComponent implements OnInit {
    products: any[];

    constructor(private productService: ProductService) { }
    
    deleteProduct(id: number) {
        this.productService.delete(id);
        this.loadProducts();
    }

    ngOnInit() {
        this.loadProducts();

        // reload products when updated
        // $scope.$on('products-updated', loadProducts);
    }

    private loadProducts() {
        this.products = this.productService.getAll();
    }
}