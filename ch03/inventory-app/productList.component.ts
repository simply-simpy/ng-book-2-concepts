import {Component} from '@angular/core';


@Component({
    selector: 'products-list',
    template: `<h1>{{ product.name }}</h1>
               <h2>{{ product.sku }}</h2>`,
    inputs: ['product'],
    outputs: ['onProductSelected']
})

export class ProductListComponent{}