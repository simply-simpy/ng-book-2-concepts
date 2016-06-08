import {Component} from '@angular/core';
import {ProductListComponent} from './productList.component';

// provides a product object

class Product {
    productWasSelected(product: Product): void {
        console.log('Product clicked: ', product);
    }

    constructor(
        public sku: string,
        public name: string,
        public imgUrl: string,
        public department: string[],
        public price: number) {

    }
}
// (onProductSelected)="productWasSelected($event)"
@Component({
    selector: 'inventory-app',
    directives: [ProductListComponent],
    template: `
        <div *ngFor="let product of products" class="inventory-app">
            <products-list 
                [product]="product" 
                
                >    
            </products-list>
        </div>
    `
})

export class InventoryApp {
    products: Product[];

    constructor(){
        this.products = [
            new Product('NICEHAT', 'A nice black hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'hats'], 29.99 ),
            new Product('MYSHOES', 'Black running shoes', '/resources/images/products/shoes.jpg', ['Men', 'Accessories', 'hats'], 39.99 ),
            new Product('NICEHAT', 'Red hat', '/resources/images/products/red-hat.jpg', ['Men', 'Accessories', 'hats'], 29.99 )
        ]
    }
    productWasSelected(product: Product): void {
        console.log('Product clicked: ', product);
    }

}



