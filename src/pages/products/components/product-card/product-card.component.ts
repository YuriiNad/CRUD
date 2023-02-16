import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/models/product.mode';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
	@Input() product!: Product;
	@Output() onRemove = new EventEmitter<Product>();
	@Output() onEdit = new EventEmitter<Product>();
}
