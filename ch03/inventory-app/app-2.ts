import { Component, EventEmitter } from '@angular/core';

// product object
class Product {
    constructor(
        public sku: string,
        public name: string,
        public imgageUrl: string,
        public department: string[],
        public price: number
    )
}


// product image
@Component({
    selector: 'product-image',
    host: {class: 'ui small image'},
    inputs: ['product'],
    template: `
        <img class="product-image" [src="product.imageUrl"]>
    `
})

class ProductImage {
    product: Product
}

// product department — shows breadcrumbs
@Component({
    selector: 'product-department',
    inputs: ['product'],
    template: `
        <div class="product-department">
            <span *ngFor="let name of product.department; let i = index">
                <a href="#">{{ name }}</a>
                <span>{{ i < (product.department.length-1) ? '>' : '' }}</span>
            </span>
        </div>
    `
})
class ProductDepartment {
    product: Product
}

/**
 * @PriceDisplay
 */
@Component({
    selector: 'price-display',
    inputs: ['price'],
    template: `
        <div class="price-display">\{{ price }}</div>
    `
})
class PriceDisplay {
    price: number;
}

/**
 * @ProductRow — single product
 */
@Component({
    selector: 'product-row',
    inputs: ['product'],
    host: {'class': 'item'},
    directives: [ProductImage, ProductDepartment, PriceDisplay],
    template: `
        <product-image [product]="product"></product-image>
        <div class="content">
            <div class="header">
                {{ product.name }}
            </div>
            <div class="meta">
                <div class="product-sku">SKU #{{ product.sku }}</div>
            </div>
            <div class="description">
                <product-department [product]="product"></product-department>
            </div>
        </div>
        <price-display [price]="product.price"></price-display>
    `
})
class ProductRow {
    product: Product
}

/**
 * @ProductList: renders all ProductRows and stores currently selected product
 */

@Component({
    selector: 'products-list',
    directives: [ProductRow],
    inputs: ['productList'],
    outputs: ['onProductSelected'],
    template: `
        <div class="ui items">
            <product-row>
                *ngFor="let myProduct of productList"
                 [product]="myProduct"
                 (click)='clicked(myProduct)'
                 [class.selected]="isSelected(myProduct)"
            </product-row>
        </div>
    `
})

class ProductsList {
    /**
     * @input productList — the product passed to us
     */
    productList: Product[];

    /**
     * @output onProductSelected — outputs the current product whenever a new Product is selected
     */
    onProductSelected: EventEmitter<Product>;

    /**
     * @property currentProduct – local state containing the currently selected 'Product'
     */
    currentProduct: Product;

    constructor(){
        this.onProductSelected = new EventEmitter();
    }

    clicked(product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }
    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct){
            return false
        }
        return product.sku === this.currentProduct.sku;
    }
}















































