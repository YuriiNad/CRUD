import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Product } from 'src/models/product.mode';

@Injectable({
	providedIn: 'root'
})
export class ProductsService {
	private readonly PREFIX = 'USER_PRODUCTS';

	constructor(
		private api: ApiService,
		private router: Router,
	) { }

	public add(product: Product): void {
		const currArray = this.getAll() || [];

		if (!!currArray.length) {
			this.api.set<Product[]>(this.PREFIX, [...currArray, product]);
			this.router.navigateByUrl('products');
			return;
		}

		this.api.set<Product[]>(this.PREFIX, [product]);
		this.router.navigateByUrl('products');
	}

	public getAll(): Product[] {
		const products = this.api.get<Product[]>(this.PREFIX);
		// console.log(products)
		return products;
	}
}
