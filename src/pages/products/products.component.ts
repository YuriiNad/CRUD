import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/core/products.service';
import { Product } from 'src/models/product.mode';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	public products!: Product[];

	constructor(public product: ProductsService) { }
	ngOnInit(): void {
		this.products = this.product.getAll()
	}

	logMeth(data: any) {
		console.log(data)
	}
}
